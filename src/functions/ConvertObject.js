 export const ConvertObject = (setState, data)=>{
    setState({
        uuid:data.uuid,
        desc:data.description,
        iconUrl: data.iconUrl,
     symbol: data.symbol,   
     name: data.name,   
     price: data.price,
     change: data.change,
     "24hVolume": data["24hVolume"],
     marketCap: data.marketCap,
    })
}