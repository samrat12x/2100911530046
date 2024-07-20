

 async function AccessTokenGenerator() {
const Url = 'http://20.244.56.144/test/auth';

    const postData = {
   companyName: "kskskillworks",
        clientID: "291558b1-b8aa-4320-b4e8-b9aaa1ccb465",
    clientSecret: "XPDzygqmHBmGXZVg",
     ownerName: "samrat",
        ownerEmail: "samratpatel12x@gmail.com",
        rollNo: "2100911530046"
    };

    try {
const response = await fetch(Url, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
     });

        const data = await response.json();
        console.log('Response data is =', data);
    } catch (error) {
        console.error('Coudnt generate the access token:', error);
    }
}


module.exports=AccessTokenGenerator;