const apiKey = 'rL4fxKLOGhTNQptyTPMl3bS9pXp_J8cU0-J15N4rzV_6V8wA3UjWnmn3XBclp9C1aneSCinuLtVzc2Le9KJ0sgUvtLBFfnszUpi1o7sE7sBA6HCfAutSeBFpRUDjWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors.now.sh/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      header: {
       Authorization: `Bearer ${apiKey}`
     }
    })
    .then(response => { response.json() })
    .then(jsonResponse => { if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories.alias,
          rating: business.rating,
          reviewCount: business.review_count
        };
      })
    } })
  }
}

export default Yelp;
