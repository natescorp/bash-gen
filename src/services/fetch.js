
const myId = '_';
const getOpenWeatherUrl = ({ cityName = 'London', appid = myId, lang = 'en' }) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&lang=${lang}&units=metric`
const getWeather = async (cityName) => {
    try {
        const response = await fetch(getOpenWeatherUrl({ cityName, lang: 'ru' }));
        const reader = response.body.getReader();
        let receivedLength = 0;
        let chunks = [];
        let isRead = true
        while(isRead) {
            const {done, value} = await reader.read();

            if (done) {
                isRead = false;
                break;
            }

            chunks.push(value);
            receivedLength += value.length;
        }

        let chunksAll = new Uint8Array(receivedLength);
        let position = 0;
        for(let chunk of chunks) {
            chunksAll.set(chunk, position);
            position += chunk.length;
        }

        let result = new TextDecoder("utf-8").decode(chunksAll);

        let commits = JSON.parse(result);

        console.log('commits', commits);
        return commits;
    } catch (e) {
        console.log('error', e);
    }
}

export default getWeather
