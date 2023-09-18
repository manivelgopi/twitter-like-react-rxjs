import axios from 'axios';
import React, { useEffect } from 'react';

export default function Profile() {
    interface ProfileConst {
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
    }
    const [profileData, setProfileData] = React.useState<ProfileConst[]>([]);


    async function gerProfile() {
        // if (url)
        await axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setProfileData(response.data);
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {

    }, [profileData])
    useEffect(() => {
        gerProfile()
    }, [])

    return (
        <>
            <div data-testid="twitter-profile-page">
                <h1>Profile Page</h1>
                <div>
                    {/* {
                        profileData.map((profile, index) => {
                            return (
                                <div key={index}> {profile.title}</div>
                            )
                        })
                    } */}
                </div>
            </div>
        </>
    )
}

