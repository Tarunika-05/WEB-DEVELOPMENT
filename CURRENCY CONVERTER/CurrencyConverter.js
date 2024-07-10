
let frmcode="USD";
let tocode="INR";
  
  const countryList = {

    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "NO",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
      
  };
  
  let dropdown=document.querySelectorAll("#dropdowns select");

  for (select of dropdown){
    for(key in countryList){
        let op=document.createElement("option");
        op.innerText=key;
        op.value=key;
        select.append(op);
        
        if(select.id=="from" && key=="USD"){
            op.selected="selected";
            
        }
        if(select.id=="to" && key=="INR"){
            op.selected="selected";
            let info=document.querySelector("#info");
            fetch(`https://api.fxratesapi.com/convert?from=${frmcode}&to=${tocode}&format=JSON&amount=1`)
            .then(resp => resp.json())
            .then((data) => {
              info.innerText=`1  ${frmcode} = ${data.result}  ${tocode}`;
            })
        }


    }
    select.addEventListener("change",(evt)=>{
        update(evt.target);
    })
  }

  function update(element){
    let concode=countryList[element.value];
    if(element.id=="from"){
        let fromimg=document.querySelector("#from img");
        fromimg.src=`https://flagsapi.com/${concode}/shiny/64.png`;
        frmcode=element.value;
        let info=document.querySelector("#info");
            fetch(`https://api.fxratesapi.com/convert?from=${frmcode}&to=${tocode}&format=JSON&amount=1`)
            .then(resp => resp.json())
            .then((data) => {
              info.innerText=`1  ${frmcode} = ${data.result}  ${tocode}`;
        })
    }
    if(element.id=="to"){
        let toimg=document.querySelector("#to img");
        toimg.src=`https://flagsapi.com/${concode}/shiny/64.png`;
        tocode=element.value;
         
        let info=document.querySelector("#info");
        fetch(`https://api.fxratesapi.com/convert?from=${frmcode}&to=${tocode}&format=JSON&amount=1`)
        .then(resp => resp.json())
        .then((data) => {
          info.innerText=`1  ${frmcode} = ${data.result}  ${tocode}`;

  });

    }
  }

let btn=document.querySelector("button");
console.log(btn);

btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  let inp=document.querySelector("#amt");
  let val=inp.value;
  if(val==""){
    alert(`ENTER AMOUNT!`);
  }
  else{
    fetch(`https://api.fxratesapi.com/convert?from=${frmcode}&to=${tocode}&format=JSON&amount=${val}`)
    .then(resp => resp.json())
    .then((data) => {
      info.innerText=`${val}  ${frmcode} = ${data.result}  ${tocode}`;
  })
  }
  
 
  


})

  

