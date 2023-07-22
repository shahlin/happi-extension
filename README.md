# Happi Chrome Extension
Happi is a chrome extension to measure your daily developer productivity by tracking metrics that are more focused towards developers. It takes less than a minute every day to fill in.
Lots of inspiration was taken off of a research done by Microsoft, GitHub and University of Victoria. They've called it the [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124). It provides a holistic approach to measuring developer productivity. Happi uses this framework where possible and helps you track your developer productivity and find areas where you can do improve.

<a href="https://chrome.google.com/webstore/detail/happi/enjnekjgcjcjhmdhegdgenhaghkfjfld">
    <img style="display:inline;" src="https://edent.github.io/SuperTinyIcons/images/svg/chrome.svg" width="30" />
    <div>Find Happi on Chrome!</div>
<a/>

## First Look
<img src="https://github.com/shahlin/happi-extension/assets/32275018/64ec8fd2-9c1c-480b-8f23-e7199ff2dbad" width="500"/>

# Local Build
## Build Project
1. Clone the repository locally
2. Install dependencies by running `npm install` on your terminal
3. Duplicate the `.env.sample` file and rename it to `.env`
4. Populate the `REACT_APP_API_URL` variable with mock API URL
    - Example: `REACT_APP_API_URL=http://localhost:3000`
5. Build project by running `npm run build`

## Running Mock API
> **Note**
> This step is optional if you wish to only update the extension popup without access to the API
1. Install `json-server` globally by running `npm install -g json-server`
2. Once installed, you can start the mock API server by running the following command:
    - `json-server --watch src/mock/db.json`
3. To verify if the mock APIs are working, try accessing the following endpoint:
    - **GET** `http://localhost:3000/stats/myclientidx/basics`

## Install Extension Locally
1. Open Chrome extensions (Chrome -> Click on three dots on the top right -> Extensions -> Manage Extensions)
2. Switch on **Developer Mode** (toggle on top right)
3. Click on **Load Unpacked**
4. Select the `build` folder from your project folder
    - If you don't see the `build` folder, run `npm run build` on your project folder
5. The extension should be available on Chrome now!
