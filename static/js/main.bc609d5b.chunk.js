(this["webpackJsonpusdt-forsage"]=this["webpackJsonpusdt-forsage"]||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),i=a.n(l),r=a(27),o=a(28),c=a(29),m=a(6),d=a.n(m);var p=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint8",name:"_decimals",type:"uint8"},{internalType:"uint256",name:"initialSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"BurnLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_blackListedUser",type:"address"},{indexed:!1,internalType:"uint256",name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"IssueLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_evilUser",type:"address"},{internalType:"string",name:"_reason",type:"string"}],name:"addBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"blacklistReason",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cancelOwnershipTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"increaseIssueLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isBlackListed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"issue",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipTransferDeadline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"reciveOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"redeem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"reduceBurnLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var u=[{inputs:[{internalType:"address",name:"_tokenUSDT",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"MissedEthReceive",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"},{indexed:!1,internalType:"uint8",name:"place",type:"uint8"}],name:"NewUserPlace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!0,internalType:"uint256",name:"userId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"referrerId",type:"uint256"}],name:"Registration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"currentReferrer",type:"address"},{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Reinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"SentExtraEthDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Upgrade",type:"event"},{constant:!1,inputs:[{internalType:"uint8",name:"_level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"ChangeLevelPrice",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenOTRO",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenUSDT",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"LAST_LEVEL",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"buyNewLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"currentStartingLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"findFreeX3Referrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToAddress",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isUserExists",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastUserId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"levelPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrerAddress",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"registrationExt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tokenOTRO",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenUSDT",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"partnersCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersActiveX3Levels",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersX3Matrix",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"address[]",name:"",type:"address[]"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawLostOTROFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostTRXFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostUSDTFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];const y=new(a(11).a)(null,{path:"/"});var h=a(23);const b="https://rpc.cardona.zkevm-rpc.com",E="0x07216598f9fc6186C949172aF12d2BDFc83c9882",f="0x0000000000000000000000000000000000000000";class w extends n.Component{constructor(e){super(e),this.state={decimals:6,owner:f,addressToken:f,walletView:f,sponsor:f,aprovedUSDT:new h(0),balanceUSDT:new h(0),levelPrice:new h(0),ganado:new h(0),idSponsor:new h(0),admin:!1,tokenName:"",id:"Loading...",wallet:"Loading...",level:0,team:"0",texto:"Loading...",link:"Loading...",canastas:[],levelsPrice:[],image:s.a.createElement(s.a.Fragment,null),contract:{ready:!1,web3:null,token:null,principal:null}},this.conectar=this.conectar.bind(this),this.estado=this.estado.bind(this),this.withdraw=this.withdraw.bind(this),this.deposit=this.deposit.bind(this),this.getSponsor=this.getSponsor.bind(this),this.changeToken=this.changeToken.bind(this),this.getTeam=this.getTeam.bind(this)}async componentDidMount(){var e=this;let t=setInterval((function(){e.conectar(),e.estado()}),3e3);this.setState({intervalo:t}),window.ethereum.on("accountsChanged",(function(){e.conectar(),e.estado()}))}async componentWillUnmount(){clearInterval(this.state.intervalo),window.ethereum.removeAllListeners()}async conectar(){let{contract:e,wallet:t,walletView:a}=this.state,n=new d.a(b);if("undefined"!==typeof window.ethereum){t=await window.ethereum.request({method:"eth_requestAccounts"}).then((async function(e){return e[0]})).catch((function(e){return console.error(e),f})),n=new d.a(window.ethereum);let e=2442;await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+e.toString(16)}]}).catch((async function(t){console.log(t),await window.ethereum.request({jsonrpc:"2.0",method:"wallet_addEthereumChain",params:[{chainId:"0x"+e.toString(16),chainName:"Polygon TestNet-zkevm",rpcUrls:[b],nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18},blockExplorerUrls:["https://cardona-zkevm.polygonscan.com/"]}],id:0})}))}let s=t;e.web3=n,e.principal=new n.eth.Contract(u,E);let l=await e.principal.methods.owner().call({from:s}),i=await e.principal.methods.tokenUSDT().call({from:s});e.token=new n.eth.Contract(p,i);let r=parseInt(await e.token.methods.decimals().call({from:s})),o=await e.token.methods.symbol().call({from:s});if(e.ready=!0,this.setState({contract:e,addressToken:i,decimals:r,tokenName:o,owner:l}),this.props.isView){let t=document.location.href;if(t.indexOf("&wallet=")>0){t=t.split("&wallet=")[1],t=t.split("&")[0],t=t.split("#")[0],t=t.toLowerCase();try{a=n.utils.toChecksumAddress(t)}catch(c){let n="Error: "+c.toString().split("Error:")[1];console.log(n),a=await e.principal.methods.idToAddress(parseInt(t)).call({from:s})}finally{await e.principal.methods.isUserExists(a).call({from:s})||(alert("user is not exists. Register first."),a=f),this.setState({walletView:a})}}s=a,a===f&&(a=await e.principal.methods.owner().call({from:s}))}this.setState({wallet:t}),this.estado()}async estado(){var e=this;let{wallet:t,walletView:a,owner:n,decimals:l,contract:i,link:o,tokenName:c}=this.state;if(!i.ready)return;this.getSponsor();let m=t;this.props.isView&&(t=a);let d=0,p=[];for(var u=15;u>=0;u--)await i.principal.methods.usersActiveX3Levels(t,u).call({from:m})&&d++;let y=await i.principal.methods.levelPrice(d+1).call({from:m});y=new h(parseInt(y)).shiftedBy(-l);let b=await i.token.methods.balanceOf(t).call({from:m});b=new h(parseInt(b)).shiftedBy(-l);let f=await i.token.methods.allowance(t,E).call({from:m});f=new h(parseInt(f)).shiftedBy(-l);let w="Buy | "+y.toString(10)+c;if(0===d&&(w="Register | "+y.toString(10)+c),15===d&&(w="Max Level Reached"),0===f.toNumber()&&(w="CONNECT WALLET"),this.setState({level:d,levelPrice:y,texto:w,balanceUSDT:b,aprovedUSDT:f,isOwner:n.toLowerCase()===t.toLowerCase()}),await i.principal.methods.isUserExists(t).call({from:m})){let e=await i.principal.methods.users(t).call({from:m});o=document.location.origin+"?backoffice&ref="+parseInt(e.id),this.setState({id:parseInt(e.id),link:o})}else this.setState({id:"N/A",link:"Make an investment to get the referral LINK"});let{canastas:g,level:v}=this.state,T=0,N=0,x=new h(0),k=[];for(k[1]=20,u=2;u<=15;u++)k[u]=2*k[u-1];this.setState({levelsPrice:k});let O=!0;for(u=1;u<=15;u++){let a,n,l,o="",d=0;if(u<=v){T+=k[u];let e=await i.principal.methods.usersX3Matrix(t,u).call({from:m});d=parseInt(e[3]),e[1].length>0&&(p=[...p,...e[1]],p=[...new Set(p)]),l=e[1].length+3*d,O&&(this.setState({team:l}),O=!1),N+=l;let y=l/3,b=2*parseInt(y);y=(""+y).split("."),y.length>1?(y=y[1],y=y.indexOf("3")>=0?1:2):y=0,b=parseInt(b)+parseInt(y),x=new h(b).times(k[u]).plus(x);let E=e[1].length+3*d%3;if(l>0)switch(E){case 1:a="#009030",n="gray",o="gray";break;case 2:a="#009030",n="#009030",o="gray";break;case 0:a="#009030",n="#009030",o="#009030";break;default:a="gray",n="gray",o="gray"}g[u-1]=s.a.createElement(r.a,{md:4,style:{width:"200px",margin:"1.1rem",padding:"2% 1%",textAlign:"center",borderStyle:"solid",borderWidth:"2px",borderColor:"white",borderRadius:"10px"},key:"level"+u},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},u),s.a.createElement("span",{style:{color:"white"}},k[u]," ",c),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge badge-gray",style:{color:a}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge badge-gray",style:{color:n}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge badge-gray",style:{color:o}},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success",style:{color:"black",width:"80%",backgroundColor:"gray",cursor:"not-allowed",fontWeight:"bold",borderRadius:"5px",borderStyle:"none"}}," Buyed"),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users",style:{color:l>0?"#009030":""}})," ",l," ","  |  ",s.a.createElement("i",{className:"fa fa-refresh",style:{color:d>0?"#009030":""}})," ",d)}else{g[u-1]=s.a.createElement(r.a,{md:4,style:{width:"200px",margin:"1.1rem",padding:"2% 1%",textAlign:"center",borderStyle:"solid",borderWidth:"2px",borderColor:"white",borderRadius:"10px"},key:"level-"+u},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},u," "),s.a.createElement("span",{style:{color:"white"}},k[u]," ",c),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn",onClick:function(){e.deposit()},style:{color:"white",width:"80%",backgroundColor:"#009030",borderRadius:"5px",fontWeight:"bold",borderStyle:"none"}}," ",s.a.createElement("b",null,"Buy Level")),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users"})," 0 ","  |  ",s.a.createElement("i",{className:"fa fa-refresh"})," 0")}this.setState({canastas:g})}this.setState({invertido:T,ganado:x,personas:N});let _=s.a.createElement(s.a.Fragment,null),L="";x.toNumber()>=2e3&&v>=4&&(L="1"),x.toNumber()>=1e4&&v>=6&&(L="2"),x.toNumber()>=1e5&&v>=9&&(L="3"),x.toNumber()>=1e6&&v>=13&&(L="4"),x.toNumber()>=1e8&&v>=15&&(L="7"),""!==L&&(_=s.a.createElement("img",{style:{width:"150px"},src:"images/avatars/sello-"+L+".png",alt:"sello level"})),this.setState({image:_})}async getTeam(e){let t=e.length;for(let a=0;a<e.length;a++)t++;return this.setState({team:t}),t}async getSponsor(){let{owner:e,wallet:t,contract:a}=this.state,n=t,s=e,l=document.location.href;if(await a.principal.methods.isUserExists(t).call({from:n})){s=(await a.principal.methods.users(t).call({from:n})).referrer}else if(s=y.get("sponsor"),void 0===s&&(s=e),l.indexOf("?")>0){let e,t=l.split("?")[1].split("&"),o={};for(var i=0,r=t.length;i<r;i++)e=t[i].split("="),o[e[0]]=unescape(decodeURI(e[1]));if(o.ref){e=o.ref.split("#")[0];let t=await a.principal.methods.idToAddress(e).call({from:n});await a.principal.methods.isUserExists(t).call({from:n})&&(s=t,y.set("sponsor",""+s,{maxAge:2592e3}))}}let o=await a.principal.methods.users(s).call({from:n});return this.setState({sponsor:s,idSponsor:new h(o.id)}),s}async deposit(){if(this.props.isView)return;let{level:e,levelPrice:t,balanceUSDT:a,aprovedUSDT:n,contract:s,wallet:l,decimals:i,levelsPrice:r}=this.state;e++;let o=l;if(e>parseInt(await s.principal.methods.LAST_LEVEL().call({from:o})))window.alert("You reached the last level");else if(t.toNumber()>a.toNumber())window.alert("You do not have enough funds in your account");else if(n.toNumber()<=t.toNumber())try{await s.token.methods.approve(E,new h("1000000").shiftedBy(i).toString(10)).send({from:o,gasPrice:"10000000",gas:1e6})}catch(c){console.log(c),window.alert("Error approve: "+c.toString())}else{if(await s.principal.methods.isUserExists(l).call({from:o}))try{await s.principal.methods.buyNewLevel(e,new h(r[e]).shiftedBy(i).toNumber()).send({from:o,gasPrice:"10000000",gas:1e6})}catch(c){return console.log(c),void window.alert("Error buy level: "+c.toString())}else try{let e=await this.getSponsor();this.setState({sponsor:e}),await s.principal.methods.registrationExt(e,new h(r[1]).shiftedBy(i).toNumber()).send({from:o,gasPrice:"10000000",gas:1e6})}catch(c){return console.log(c),void window.alert("Error register: "+c.toString())}this.estado()}}async withdraw(){if(this.props.isView)return;let{contract:e,wallet:t}=this.state;e.principal.methods.withdraw().send({from:t}).then((function(){alert("Is done")})).catch((function(e){alert("Error: "+e.toString())}))}async changeToken(e){if(this.props.isView)return;let{wallet:t,contract:a}=this.state;a.methods.ChangeTokenUSDT(e).sen({from:t}).then((function(){alert("change is done")})).catch(console.error)}render(){var e=this;let{wallet:t,walletView:a,id:n,balanceUSDT:l,level:i,texto:m,link:d,idSponsor:p,sponsor:u,ganado:y,personas:h,canastas:b,isOwner:E,team:f,addressToken:w,tokenName:g,image:v}=this.state;this.props.isView&&(t=a);let T=s.a.createElement(s.a.Fragment,null);return E&&!this.props.isView&&(T=s.a.createElement(o.a,null,s.a.createElement(r.a,null,"Change principal token: ",s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.changeToken("0xc2132D05D31c914a87C6611C10748AEb04B58e8F")}},"USDT"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063")}},"DAI"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359")}},"USDC")))),s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{style:{marginTop:"100px",fontSize:"16px",color:"white"}},s.a.createElement(o.a,null,s.a.createElement(r.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,null,s.a.createElement(r.a,{md:!0,style:{alignItems:"center",textAlign:"center"}},v,s.a.createElement("p",{style:{marginBottom:"0px"}},s.a.createElement("span",{style:{fontWeight:"bold",color:"white",wordBreak:"break-all",fontSize:"1.3rem"}},t," ")),s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Balance"),s.a.createElement("td",{style:{textAlign:"right"}},l.dp(2).toString(10)," ",s.a.createElement("strong",null,g))),s.a.createElement("tr",null,s.a.createElement("td",null,"Level"),s.a.createElement("td",{style:{textAlign:"right"}},i)),s.a.createElement("tr",null,s.a.createElement("td",null,"My ID"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},n))),s.a.createElement("tr",null,s.a.createElement("td",null,"Partners"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},f))),s.a.createElement("tr",null,s.a.createElement("td",null,"depth"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},h))),s.a.createElement("tr",null,s.a.createElement("td",null,"Profit"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},y.dp(2).toString(10)," ",g))),s.a.createElement("tr",null,s.a.createElement("td",null,"Sponsor"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},p.dp(0).toString(),":",u)))))),s.a.createElement(o.a,{style:{textAlign:"center",marginBottom:"0px"}},s.a.createElement(r.a,{md:!0},s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){return e.deposit()},style:{color:"white",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},m))),s.a.createElement(o.a,{style:{textAlign:"center",marginBottom:"0px"}},s.a.createElement(r.a,{md:!0},s.a.createElement("p",{style:{border:"solid white",borderRadius:"5px",padding:"2px",margin:"10px"}},d),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){""!==d&&(navigator.clipboard.writeText(d),window.alert("link copied!"))},style:{color:"white",width:"325px",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},"Copy referal link ",s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-clipboard text-white"}))))),T))),s.a.createElement(o.a,null,s.a.createElement(r.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{lg:4},b)))),s.a.createElement(o.a,{style:{paddingTop:"40px"}},s.a.createElement("div",{className:"col-six",style:{textAlign:"right"}},s.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-users"})," Number partners in the slot")),s.a.createElement("div",{className:"col-six "},s.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-refresh"})," Recycle count")))),s.a.createElement("div",null,"Token: ",w))}}var g=w;class v extends n.Component{render(){return s.a.createElement("div",null,s.a.createElement("section",{id:"home",className:"s-home target-section","data-parallax":"scroll","data-image-src":"../../images/hero-bg.jpg","data-natural-width":"3000","data-natural-height":"2000","data-position-y":"center"},s.a.createElement("div",{className:"overlay"}),s.a.createElement("div",{className:"shadow-overlay"}),s.a.createElement("div",{className:"home-content"},s.a.createElement("div",{className:"row home-content__main"},s.a.createElement("h1",null,"#1 Blockchain descentralized USDT ecosystem"),s.a.createElement("div",{className:"home-content__buttons"},s.a.createElement("a",{href:"#view",className:"smoothscroll btn btn--stroke"},"View Demo"),s.a.createElement("a",{href:"/?backoffice",className:"smoothscroll btn btn--stroke"},"Login"))),s.a.createElement("div",{className:"home-content__line"})),s.a.createElement("ul",{className:"home-social"},s.a.createElement("li",null,s.a.createElement("a",{href:"#0"},s.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),s.a.createElement("span",null,"Twiiter"))))),s.a.createElement("section",{id:"about",className:"s-about"},s.a.createElement("div",{className:"row about-desc"},s.a.createElement("div",{className:"col-full"},s.a.createElement("p",null,"Crowdfunding Global Decentralized Platform Based On Smart Contract\u2019s Technology Connects People To Directly Engage In Personal And Business Transactions."))),s.a.createElement("div",{className:"row about-stats stats block-1-4 block-m-1-2 block-mob-full"},s.a.createElement("div",{className:"col-block stats__col "},s.a.createElement("div",{className:"stats__count"},"1505"),s.a.createElement("h5",null,"All participants")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"127"),s.a.createElement("h5",null,"Joined in 24H")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"109"),s.a.createElement("h5",null,"USDT ",s.a.createElement("br",null),"Member results")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"102"),s.a.createElement("h5",null,"USDT ",s.a.createElement("br",null),"Results in 24H"))),s.a.createElement("div",{className:"about__line"})),s.a.createElement("section",{id:"services",className:"s-services"},s.a.createElement("div",{className:"row section-header has-bottom-sep"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2",style:{color:"white"}},"The Next Generation Defi Ecosystem"))),s.a.createElement("div",{className:"row services-list block-1-2 block-tab-full"},s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-paint-brush"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Immutability"),s.a.createElement("p",null,"Blockchain secures the algorithm, therefore nobody, even the creators or developers, can change, cancel, stop, or alter your transactions."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-group"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Automatic"),s.a.createElement("p",null,"All transactions between the community members are executed directly from one personal wallet to another. There are no accounts to withdraw from, THEMONOPOLYCLUB does not store your funds."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-megaphone"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Autonomus"),s.a.createElement("p",null,"The ecosystem is built on the smart contract technology that is completely autonomous, which excludes any human factor."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-earth"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Transparent an decentralized"),s.a.createElement("p",null,"The smart contract code is open, and anyone anytime can observe the entire transaction history. There are no managers or admins at the head, the creators are the same platform participants like everyone else."))))),s.a.createElement("section",{id:"clients",className:"s-clients"},s.a.createElement("div",{className:"row section-header"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2"},"FREQUENTLY ASKED QUESTIONS"))),s.a.createElement("div",{className:"row clients-testimonials"},s.a.createElement("div",{className:"col-full"},s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"What is THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is a Global Decentralized Community and the first USDT marketing matrix in history with immediate reward distribution built on Tron blockchain smart contract, which makes it fully decentralized, transparent, secure and unstoppable.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"How long is THE MONOPOLY CLUB going to work?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is associated with blockchain will keep working forever. As it is a decentralized system, it is not abided by the rules and regulations set by any government body and cannot be hacked or shut down. It will remain in the Blockchain forever.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Are Smart Contracts Legal in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"The smart contract does not depend on the site, it works on a blockchain that cannot be blocked. TheMonopolyClub does not fall under the legal laws and regulations of any of the countries in the world, it can not be illegal, unless, it will be done specifically for the purpose of attempting to discredit or take under control manually. Smart Contracts are like Bitcoin or NFT, they are not illegal, but also not legal."),s.a.createElement("p",null,"The Monopoly Club is a DeFi Ecosystem and all this is aimed at development, realization of dreams of thousands of people, helping people, transparency, security and decentralization. The Monopoly Club has only good goals, given new technologies that do not depend on governments and banks.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Why THE MONOPOLY CLUB is Not a Pyramid?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Firstly, in a Pyramid scheme, old participants get paid with the money from new participants. Sooner or later the scheme operator decides to pull it to keep their profits. It\u2019s mathematically impossible for this scheme to go on forever anyway."),s.a.createElement("p",null,"Secondly, a Ponzi scheme is always centralized! Every pyramid has an operator who can push the button to stop payouts and claim all the money. Once that happens, the pyramid is done."),s.a.createElement("p",null,"THE MONOPOLY CLUB doesn\u2019t have a single thing in common with the scheme above:      "),s.a.createElement("p",null,"All transactions are made between users: from wallet to wallet. The smart contract balance is always zero. THE MONOPOLY CLUB doesn\u2019t have an administrator who could terminate the project. THE MONOPOLY CLUB is 100% decentralized. To stop the platform, no one can, because it\u2019s functioning is ensured by a smart contract that cannot be deleted or changed.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Do I Need to Withdraw Money from THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB does not retain any funds, Your income arrives instantly into your personal wallet directly from your partners. Only you have access to your wallet and no one else can manage your money.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Is THE MONOPOLY CLUB a Company?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is NOT a company (especially an investment company) that is managed by a CEO and a board of management, where you can bring a complaint against the system that fails to live up to expectations. In reality, it is a self-executing smart contract instructed to carry out sequences of arithmetic, logical or Pre-determined operations automatically via computer programming in order to serve a specific purpose. As such, there is no middleman or intermediary involved to issue the refund for the initial expense. Just like when you buy an NFT, you cannot get your funds back because the transaction cannot be reversed and when you make the purchase you are agreeing to buy an NFT.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Who Created THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"The idea of THE MONOPOLY CLUB belongs to a group of crypto enthusiasts, who are also participants in the community and have no special privileges.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Who Manages The Platform?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB platform doesn\u2019t have a manager. The smart contract works on the Tron Blockchain. This means that the platform is fully decentralized(it has no leaders or admins).")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Is THE MONOPOLY CLUB Legal or illegal?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"To put it simply, it's neither legal nor illegal. This is because THE MONOPOLY CLUB does not need to be regulated or be approved to operate online, since it is free from government control due to its decentralized nature. Fact is, it is not a corporate entity or company. It does not do business transactions between parties, like an MLM company would."),s.a.createElement("p",null,"THE MONOPOLY CLUB is a system built on pre defined codes deployed by the developers on a blockchain network, we know this as smart contract.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Can I Join THE MONOPOLY CLUB in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Absolutely, THE MONOPOLY CLUB is international and you can join from all the countries in the world, you just need a mobile device, tablet or laptop and internet connection.")))))),s.a.createElement("div",{id:"view",className:"row section-header",style:{marginTop:"125px"}},s.a.createElement("div",{className:"col-full",style:{textAlign:"center"}},s.a.createElement("h2",{className:"display-2"},"Account Preview"),s.a.createElement("p",null,"Loock any TMC account member."),s.a.createElement("form",{action:"/?",method:"GET"},s.a.createElement("input",{type:"hidden",name:"viewoffice",value:!0}),s.a.createElement("input",{style:{display:"block",marginRight:"auto",marginLeft:"auto",width:"90%",textAlign:"center"},type:"text",name:"wallet",placeholder:"ID or Wallet "}),s.a.createElement("button",{type:"submit"},"View"))))))}}class T extends n.Component{render(){let e="/",t=document.location.href;switch(t.indexOf("/?")>0&&(e=t.split("/?")[1],e=e.split("=")[0],e=e.split("&")[0],e=e.split("#")[0]),e=e.toLowerCase(),e){case"app":case"backoffice":return s.a.createElement(g,null);case"wallet":case"view":case"viewoffice":return s.a.createElement(g,{isView:!0});default:return s.a.createElement(v,null)}}}var N=T,x=document.getElementById("root");i.a.render(s.a.createElement(N,null),x)}},[[12,1,2]]]);
//# sourceMappingURL=main.bc609d5b.chunk.js.map