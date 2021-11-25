export class CryptoService {
    _blankImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEWAgIB7e3u9vb3ExMTMzMzU1NR4eHja2trs7Oxzc3O5ubn+/v739/fw8PDm5ubi4uLQ0NBf9a+gAAABZklEQVR4nO3dTU7CABRG0RZoC/gD+1+tHTjQOJCQEL30nBV8d/6SN7y8vh3fL5dlNa0On/bf7e63/9XhFtfpFssPx2E6zV+N/9Z8l9N5mObhmY27DRRen77wMP71iIdS2KewT2Gfwj6FfQr71sK9wjaFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h3yYKdwrbFPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2LeJiyGFcQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KezbxBcWhXEK+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvvWwmn+6xEPpbBPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2HfWrgobFPYp7BPYZ/CPoV9CvsU9m2j8DQ+s/k8HM+7Z3ZePgCqLRCNpw7OVwAAAABJRU5ErkJggg==';

    _currenciesData = {
        currencies: [
            {
                name: 'Bitcoin',
                currency: 'BTC',
                sell_price: 4324.75,
                buy_price: 4668.93,
                current_change: 2880.66,
                logo: 'https://cdn-icons-png.flaticon.com/128/825/825540.png',
            },
            {
                name: 'Ethereum',
                currency: 'ETH',
                sell_price: 312.2938,
                buy_price: 321.9382,
                current_change: 194.234,
                logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/128/ethereum_logo_icon_171173.png',
            },
            {
                name: 'Apple',
                currency: 'APPL',
                sell_price: 4324.75,
                buy_price: 4668.93,
                current_change: -8.41,
                logo: 'https://cdn.iconscout.com/icon/free/png-256/apple-1073-898135.png',
            },
            {
                name: 'Alphabate',
                currency: 'GOOG',
                sell_price: 4324.75,
                buy_price: 4668.93,
                current_change: 5480.66,
                logo: this._blankImage,
            },
            {
                name: 'Amazon',
                currency: 'AMZN',
                sell_price: 312.2938,
                buy_price: 321.9382,
                current_change: 124.243,
                logo: 'https://www.freeiconspng.com/uploads/amazon-black-icon-16.png',
            },
            {
                name: 'Commerzb',
                currency: 'CBK.DE',
                sell_price: 4324.75,
                buy_price: 4668.93,
                current_change: -0.41,
                logo: this._blankImage,
            },
            {
                name: 'Tesco',
                currency: 'TSCO.L',
                sell_price: 567.325,
                buy_price: 592.23,
                current_change: 0,
                logo: this._blankImage,
            },
        ],
        total: 7
    }

    getCurrencies = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
               resolve(this._currenciesData.currencies);
            }, 2000)
        })
        
    }

    getTotal = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._currenciesData.total);
            }, 1700)
        })
    }
}

export default new CryptoService();