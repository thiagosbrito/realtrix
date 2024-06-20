export async function getFeaturedPropertieEnum() {
    const queryEnums = `{
        __type(name: "MarketType") {
            enumValues {
                name
            }
        }
    }`;
    
    const fetchEnums = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: queryEnums
        })
    });

    return await fetchEnums.json();
}

export async function getFeaturedProperties(filter: string) {
    const featuredProperties = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query RealEstateProperties{
                    realEstateProperties(where: { marketType: ${filter} }) {
                        title
                        description {
                            html
                        }
                        price
                        address
                        city
                        state
                        zipCode
                        country
                        propertyType
                        bedrooms
                        bathrooms
                        squareFootage
                        yearBuilt
                        images {
                            url
                        }
                        agent {
                            name
                            email
                            phone
                            profilePicture {
                                url
                            }
                            bio {
                                html
                            }
                        }
                        amenities {
                            name
                            description
                            icon {
                                url
                            }
                        }
                        listingDate
                    }
                }
            `
        })
    });
    
    return await featuredProperties.json();
};