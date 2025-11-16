function openAmazon(productId) {
    const affiliateID = "YOUR_AFFILIATE_ID"; // Insert your Tracking ID here

    const appUrl = `amazon://products/${productId}`;
    const webUrl = `https://www.amazon.in/dp/${productId}?tag=${affiliateID}`;

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = appUrl;

        setTimeout(() => {
            window.location.href = webUrl;
        }, 1000);

    } else {
        window.location.href = webUrl;
    }
}
