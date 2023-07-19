# Happi Chrome Extension
Happi is a chrome extension to measure your daily developer productivity by tracking metrics that are more focused towards developers. It takes less than a minute every day to fill in.
Lots of inspiration was taken off of a research done by Microsoft, GitHub and University of Victoria. They've called it the [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124). It provides a holistic approach to measuring developer productivity. Happi uses this framework where possible and helps you track your developer productivity and find areas where you can do improve.

<a href="https://chrome.google.com/webstore/detail/happi/enjnekjgcjcjhmdhegdgenhaghkfjfld">
    <img src="https://edent.github.io/SuperTinyIcons/images/svg/chrome.svg" width="50" />
    <div>Find Happi on Chrome!</div>
<a/>

# Local Build
> **Note**
> Only the UI can be accessed using this repository, the API is unavailable locally

## Build Project
1. Clone the repository locally
2. Install dependencies by running `npm install` on your terminal
3. Build project by running `npm run build`

## Install Extension Locally
1. Open Chrome extensions (Chrome -> Click on three dots on the top right -> Extensions -> Manage Extensions)
2. Switch on **Developer Mode** (toggle on top right)
3. Click on **Load Unpacked**
4. Select the `build` folder from your project folder
    - If you don't see the `build` folder, run `npm run build` on your project folder
5. The extension should be available on Chrome now!
