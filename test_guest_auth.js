async function testGuestLogin() {
    try {
        const response = await fetch('http://localhost:5000/api/auth/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Guest Login Success!');
            console.log('User:', data.user.name);
            console.log('Email:', data.user.email);
            console.log('IsGuest:', data.user.isGuest);
            console.log('Token Length:', data.token.length);
        } else {
            console.error('Guest Login Failed:', data.error);
        }
    } catch (err) {
        console.error('Network Error:', err.message);
    }
}

testGuestLogin();
