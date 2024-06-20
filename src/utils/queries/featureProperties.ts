export const featuredProperties = `query Properties{
    properties {
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
}`