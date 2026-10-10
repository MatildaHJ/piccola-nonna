const fieldMask = [
  'displayName',
  'rating',
  'userRatingCount',
  'googleMapsLinks.reviewsUri',
  'reviews',
].join(',');

export default async (request) => {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'GET' },
    });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PIZZA_PLACE_ID;

  if (!apiKey || !placeId) {
    return Response.json(
      { error: 'Google Places is not configured.' },
      { status: 503 },
    );
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fieldMask,
      },
    },
  );

  if (!response.ok) {
    console.error('Google Places request failed:', response.status);
    return Response.json(
      { error: 'Google Places could not be reached.' },
      { status: 502 },
    );
  }

  const place = await response.json();
  // Places returns at most five reviews; show every review it provides.
  const reviews = Array.isArray(place.reviews) ? place.reviews : [];

  return Response.json(
    {
      name: place.displayName?.text,
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      reviewsUri: place.googleMapsLinks?.reviewsUri,
      reviews: reviews.map((review) => ({
        rating: review.rating,
        text: review.text?.text,
        relativePublishTimeDescription: review.relativePublishTimeDescription,
        googleMapsUri: review.googleMapsUri,
        flagContentUri: review.flagContentUri,
        author: review.authorAttribution
          ? {
              displayName: review.authorAttribution.displayName,
              uri: review.authorAttribution.uri,
              photoUri: review.authorAttribution.photoUri,
            }
          : undefined,
      })),
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
};
