 export const ConvertObject = (setState, data)=>{
    setState({
        id:data.id,
        desc:data.description.en,
        image: data.image.large,
     symbol: data.symbol,   
     name: data.name,   
     current_price: data.market_data.current_price.inr,
     price_change_percentage_24h: data.market_data.price_change_percentage_24h,
     total_volume: data.market_data.total_volume.inr,
     market_cap: data.market_data.market_cap.inr,
    })
}