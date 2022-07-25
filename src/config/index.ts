import configDev from "./config.dev.json";
import configProd from "./config.prod.json";

interface Config {
    API_URL: string
}

const config: Config = (process.env.ENV === "dev") ? configDev : configProd;
export default config;