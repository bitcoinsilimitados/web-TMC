(this["webpackJsonpusdt-forsage"]=this["webpackJsonpusdt-forsage"]||[]).push([[0],{13:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),i=a.n(l),r=a(28),o=a(29),c=a(30),m=a(10),d=a.n(m),p=a(11),u=a.n(p);var y=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint8",name:"_decimals",type:"uint8"},{internalType:"uint256",name:"initialSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"BurnLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_blackListedUser",type:"address"},{indexed:!1,internalType:"uint256",name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"IssueLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_evilUser",type:"address"},{internalType:"string",name:"_reason",type:"string"}],name:"addBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"blacklistReason",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cancelOwnershipTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"increaseIssueLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isBlackListed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"issue",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipTransferDeadline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"reciveOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"redeem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"reduceBurnLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var h=[{inputs:[{internalType:"address",name:"_tokenUSDT",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"MissedEthReceive",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"},{indexed:!1,internalType:"uint8",name:"place",type:"uint8"}],name:"NewUserPlace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!0,internalType:"uint256",name:"userId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"referrerId",type:"uint256"}],name:"Registration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"currentReferrer",type:"address"},{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Reinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"SentExtraEthDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Upgrade",type:"event"},{constant:!1,inputs:[{internalType:"uint8",name:"_level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"ChangeLevelPrice",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenOTRO",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenUSDT",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"LAST_LEVEL",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"buyNewLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"currentStartingLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"findFreeX3Referrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToAddress",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isUserExists",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastUserId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"levelPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrerAddress",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"registrationExt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tokenOTRO",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenUSDT",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"partnersCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersActiveX3Levels",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersX3Matrix",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"address[]",name:"",type:"address[]"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawLostOTROFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostTRXFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostUSDTFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];const b=new(a(12).a)(null,{path:"/"});var f=a(24);const E="0x07216598f9fc6186C949172aF12d2BDFc83c9882";class v extends n.Component{constructor(e){super(e),this.state={metamask:!1,wallet:"Loading...",admin:!1,id:"Loading...",level:"Loading...",balanceUSDT:new f(0),levelPrice:new f(0),texto:"Loading...",link:"Loading...",decimals:6,canastas:[],owner:void 0,sponsor:void 0,addressToken:void 0,contract:{ready:!1,web3:null,token:null,principal:null}},this.conectar=this.conectar.bind(this),this.estado=this.estado.bind(this),this.withdraw=this.withdraw.bind(this),this.deposit=this.deposit.bind(this),this.getSponsor=this.getSponsor.bind(this),this.changeToken=this.changeToken.bind(this)}async componentDidMount(){var e=this;setTimeout((function(){e.conectar()}),3e3);let t=setInterval((function(){e.conectar(),e.estado()}),3e4);this.setState({intervalo:t})}async componentWillUnmount(){clearInterval(this.state.intervalo)}async conectar(){var e=this;let{metamask:t}=this.state;"undefined"===typeof window.ethereum||t?"undefined"===typeof window.ethereum&&console.log("No se ha detectado Metamask"):(await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x98A"}]}),window.ethereum.request({method:"eth_requestAccounts"}).then((async function(t){e.setState({metamask:!0});let a=t[0];const n=await u()();let s=new d.a(n);const l=new s.eth.Contract(h,E);let i=await l.methods.tokenUSDT().call({from:a}).catch((function(e){return console.log("cosasssss",e),"nocarga"}));e.setState({addressToken:i});const r=new s.eth.Contract(y,i);let o=parseInt(await r.methods.balanceOf(a).call({from:a})),c=parseInt(await r.methods.decimals().call({from:a}));o=new f(o).shiftedBy(-c);let m=a,p=document.location.href;p.indexOf("?")>0&&p.indexOf("&wallet=")>0&&(m=p.split("?")[1],p.indexOf("=")>0&&(m=m.split("=")[1],p.indexOf("#")>0&&(m=m.split("#")[0])),p.indexOf("view")>0&&(s.utils.isAddress(m)||(m=""))),await e.setState({wallet:a,balanceUSDT:o,currentAccount:m,decimals:c,contract:{ready:!0,web3:s,token:r,principal:l}}),e.estado()})).catch((function(t){console.error(t),e.setState({metamask:!1,admin:!1,contract:{ready:!1}})})))}async estado(){let{metamask:e,wallet:t,decimals:a,contract:n,link:l}=this.state;if(!e||!n.ready)return;this.getSponsor();let i=t;for(var o=0,c=15;c>=0;c--)await n.principal.methods.usersActiveX3Levels(t,c).call({from:i})&&o++;let m=await n.principal.methods.levelPrice(o+1).call({from:i});m=new f(parseInt(m)).shiftedBy(-a);let d=await n.token.methods.balanceOf(t).call({from:i});d=new f(parseInt(d)).shiftedBy(-a);let p=await n.token.methods.allowance(t,E).call({from:i});p=new f(parseInt(p)).shiftedBy(-a);let u="Buy Next Level";0===o&&(u="Register & Buy Level"),15===o&&(u="Max Level Reached"),0===p.toNumber()&&(u="Link Wallet");let y=await n.principal.methods.owner().call({from:t});if(this.setState({level:o,levelPrice:m,texto:u,balanceUSDT:d,aprovedUSDT:p,owner:y,isOwner:y.toLowerCase()===t.toLowerCase()}),await n.principal.methods.isUserExists(t).call({from:t})){let e=await n.principal.methods.users(t).call({from:t});l=document.location.origin+"?backoffice&ref="+parseInt(e.id),this.setState({id:parseInt(e.id),link:l})}else this.setState({id:"N/A",link:"Make an investment to get the referral LINK"});let{canastas:h}=this.state,b=0,v=0,T=0,w=[];for(w[1]=20,c=2;c<=15;c++)w[c]=2*w[c-1];for(c=1;c<=15;c++){let e,a,l,i=[],o="",m=0;if(await n.principal.methods.usersActiveX3Levels(t,c).call({from:t})){b+=w[c],i=await n.principal.methods.usersX3Matrix(t,c).call({from:t}),m=parseInt(i[3]),l=i[1].length+3*m,v+=l,T+=l*w[c];let d=i[1].length+3*m%3;if(l>0)switch(d){case 1:e="green",a="",o="";break;case 2:e="green",a="green",o="";break;case 0:e="green",a="green",o="green";break;default:e="",a="",o=""}h[c-1]=s.a.createElement(r.a,{md:4,style:{width:"200px",margin:"1.1rem",padding:"2% 1%",textAlign:"center",borderStyle:"solid",borderWidth:"2px",borderColor:"gray",borderRadius:"10px"},key:"level"+c},s.a.createElement("h3",{style:{color:"white",marginTop:"10px"}},"Level ",c," "),s.a.createElement("span",{className:"badge-left badge badge-gray",style:{color:e}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge badge-gray",style:{color:a}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge badge-gray",style:{color:o}},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success",style:{color:"white",width:"100%"}}," Buyed"),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users",style:{color:l>0?"green":""}})," ",l," ","  |  ",s.a.createElement("i",{className:"fa fa-refresh",style:{color:m>0?"green":""}})," ",m)}else h[c-1]=s.a.createElement(r.a,{md:4,style:{width:"200px",margin:"1.1rem",padding:"2% 1%",textAlign:"center",borderStyle:"solid",borderWidth:"2px",borderColor:"gray",borderRadius:"10px"},key:"level-"+c},s.a.createElement("h3",{style:{color:"white",marginTop:"10px"}},"Level ",c," "),s.a.createElement("span",{className:"badge-left badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge badge-gray"},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success",style:{color:"white",width:"100%"}}," ",w[c]," USDT"),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users"})," 0 ","  |  ",s.a.createElement("i",{className:"fa fa-refresh"})," 0");this.setState({canastas:h})}this.setState({invertido:b,ganado:T,personas:v})}async getSponsor(){let{owner:e,wallet:t,contract:a}=this.state,n=e,s=document.location.href;if(await a.principal.methods.isUserExists(t).call({from:t})){n=(await a.principal.methods.users(t).call({from:t})).referrer}else if(s.indexOf("?")>0){let r,o=s.split("?")[1].split("&"),c={};for(var l=0,i=o.length;l<i;l++)r=o[l].split("="),c[r[0]]=unescape(decodeURI(r[1]));if(c.ref){r=c.ref.split("#")[0];let e=await a.principal.methods.idToAddress(r).call({from:t});await a.principal.methods.isUserExists(e).call({from:t})&&(n=e,b.set("sponsor",""+n))}else n=b.get("sponsor"),void 0===n&&(n=e)}return this.setState({sponsor:n}),n}async deposit(){let{level:e,levelPrice:t,balanceUSDT:a,aprovedUSDT:n,contract:s,wallet:l,decimals:i,isView:r}=this.state;if(r)return;if(e>=parseInt(await s.principal.methods.LAST_LEVEL().call({from:l})))return void window.alert("You reached the last level");if(t.toNumber()>a.toNumber())return void window.alert("You do not have enough funds in your account");let o=await this.getSponsor();const c=await s.web3.eth.getGasPrice();if(n.toNumber()<=t.toNumber())try{await s.token.methods.approve(E,new f("1000000").shiftedBy(i).toString(10)).send({from:l,gasPrice:c})}catch(m){console.log(m),window.alert("Error approve: "+m.toString())}else if(this.setState({sponsor:o}),await s.principal.methods.isUserExists(l).call({from:l}))try{await s.principal.methods.buyNewLevel(e+1,t*10**6).send({from:l,gasPrice:c})}catch(m){return console.log(m),void window.alert("Error buy level: "+m.toString())}else try{await s.principal.methods.registrationExt(o,t*10**6).send({from:l,gasPrice:c})}catch(m){return console.log(m),void window.alert("Error register: "+m.toString())}}async withdraw(){let{contract:e,wallet:t,isView:a}=this.state;a||e.principal.methods.withdraw().send({from:t}).then((function(){alert("Is done")})).catch((function(e){alert("Error: "+e.toString())}))}async changeToken(e){let{wallet:t,contract:a}=this.state;a.methods.ChangeTokenUSDT(e).sen({from:t}).then((function(){alert("change is done")})).catch(console.error)}render(){var e=this;let{wallet:t,id:a,balanceUSDT:n,level:l,levelPrice:i,texto:m,link:d,sponsor:p,ganado:u,invertido:y,personas:h,canastas:b,isOwner:f}=this.state,E=s.a.createElement(s.a.Fragment,null);return f&&(E=s.a.createElement(o.a,null,s.a.createElement(r.a,null,"Change principal token: ",s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.changeToken("0xc2132D05D31c914a87C6611C10748AEb04B58e8F")}},"USDT"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063")}},"DAI"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359")}},"USDC")))),s.a.createElement(c.a,{style:{marginTop:"100px",fontSize:"16px",color:"gray"}},s.a.createElement(o.a,null,s.a.createElement(r.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,null,s.a.createElement(r.a,{md:!0},s.a.createElement("p",{style:{textAlign:"center",marginBottom:"0px"}},s.a.createElement("span",{style:{fontWeight:"bold",color:"white",wordBreak:"break-all",fontSize:"1.3rem"}},t," ")),s.a.createElement("table",{className:"table",style:{border:"none"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"My id"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},a))),s.a.createElement("tr",null,s.a.createElement("td",null,"Balance"),s.a.createElement("td",{style:{textAlign:"right"}},n.toString(10)," ",s.a.createElement("strong",null,"USDT"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Level"),s.a.createElement("td",{style:{textAlign:"right"}},l)),s.a.createElement("tr",null,s.a.createElement("td",null,"Sponsor"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},p)))))),s.a.createElement(o.a,{style:{textAlign:"center",marginBottom:"0px"}},s.a.createElement(r.a,{md:!0},s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){return e.deposit()},style:{color:"white",width:"%"}},m),s.a.createElement("br",null),"Price ",i.toString(10)," USDT")),s.a.createElement(o.a,{style:{textAlign:"center",marginBottom:"0px"}},s.a.createElement(r.a,{md:!0},d,s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){""!==d&&(navigator.clipboard.writeText(d),window.alert("link copied!"))},style:{color:"white",width:"325px"}},"Copy referal link ",s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-clipboard text-white"}))))),E))),s.a.createElement(o.a,null,s.a.createElement(r.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{md:4},s.a.createElement(r.a,{md:4,style:{textAlign:"center"}},s.a.createElement("h2",{style:{color:"white",marginTop:"0px"}},"Earned:"),s.a.createElement("p",null,0|u," USDT")),s.a.createElement(r.a,{md:4,style:{textAlign:"center"}},s.a.createElement("h2",{style:{color:"white",marginTop:"0px"}},"My invested:"),s.a.createElement("p",null,0|y," USDT")),s.a.createElement(r.a,{md:4,style:{textAlign:"center"}},s.a.createElement("h2",{style:{color:"white",marginTop:"0px"}},"People:"),s.a.createElement("p",null,0|h))),s.a.createElement(o.a,{lg:4},b)))),s.a.createElement(o.a,{style:{paddingTop:"40px"}},s.a.createElement("div",{className:"col-six",style:{textAlign:"right"}},s.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-users"})," Number partners in the slot")),s.a.createElement("div",{className:"col-six "},s.a.createElement("div",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-refresh"})," Recycle count"))))}}var T=v;class w extends n.Component{render(){return s.a.createElement("div",null,s.a.createElement("section",{id:"home",className:"s-home target-section","data-parallax":"scroll","data-image-src":"../../images/hero-bg.jpg","data-natural-width":"3000","data-natural-height":"2000","data-position-y":"center"},s.a.createElement("div",{className:"overlay"}),s.a.createElement("div",{className:"shadow-overlay"}),s.a.createElement("div",{className:"home-content"},s.a.createElement("div",{className:"row home-content__main"},s.a.createElement("h1",null,"#1 Blockchain descentralized USDT ecosystem"),s.a.createElement("div",{className:"home-content__buttons"},s.a.createElement("a",{href:"/?viewOffice",className:"smoothscroll btn btn--stroke"},"View Demo"),s.a.createElement("a",{href:"/?backoffice",className:"smoothscroll btn btn--stroke"},"Login"))),s.a.createElement("div",{className:"home-content__line"})),s.a.createElement("ul",{className:"home-social"},s.a.createElement("li",null,s.a.createElement("a",{href:"#0"},s.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),s.a.createElement("span",null,"Twiiter"))))),s.a.createElement("section",{id:"about",className:"s-about"},s.a.createElement("div",{className:"row about-desc"},s.a.createElement("div",{className:"col-full"},s.a.createElement("p",null,"Crowdfunding Global Decentralized Platform Based On Smart Contract\u2019s Technology Connects People To Directly Engage In Personal And Business Transactions."))),s.a.createElement("div",{className:"row about-stats stats block-1-4 block-m-1-2 block-mob-full"},s.a.createElement("div",{className:"col-block stats__col "},s.a.createElement("div",{className:"stats__count"},"1505"),s.a.createElement("h5",null,"All participants")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"127"),s.a.createElement("h5",null,"Joined in 24H")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"109"),s.a.createElement("h5",null,"USDT ",s.a.createElement("br",null),"Member results")),s.a.createElement("div",{className:"col-block stats__col"},s.a.createElement("div",{className:"stats__count"},"102"),s.a.createElement("h5",null,"USDT ",s.a.createElement("br",null),"Results in 24H"))),s.a.createElement("div",{className:"about__line"})),s.a.createElement("section",{id:"services",className:"s-services"},s.a.createElement("div",{className:"row section-header has-bottom-sep"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2"},"The Next Generation Defi Ecosystem"))),s.a.createElement("div",{className:"row services-list block-1-2 block-tab-full"},s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-paint-brush"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Immutability"),s.a.createElement("p",null,"Blockchain secures the algorithm, therefore nobody, even the creators or developers, can change, cancel, stop, or alter your transactions."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-group"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Automatic"),s.a.createElement("p",null,"All transactions between the community members are executed directly from one personal wallet to another. There are no accounts to withdraw from, THEMONOPOLYCLUB does not store your funds."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-megaphone"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Autonomus"),s.a.createElement("p",null,"The ecosystem is built on the smart contract technology that is completely autonomous, which excludes any human factor."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-earth"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Transparent an decentralized"),s.a.createElement("p",null,"The smart contract code is open, and anyone anytime can observe the entire transaction history. There are no managers or admins at the head, the creators are the same platform participants like everyone else."))))),s.a.createElement("section",{id:"clients",className:"s-clients"},s.a.createElement("div",{className:"row section-header"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2"},"FREQUENTLY ASKED QUESTIONS"))),s.a.createElement("div",{className:"row clients-testimonials"},s.a.createElement("div",{className:"col-full"},s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"What is THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is a Global Decentralized Community and the first USDT marketing matrix in history with immediate reward distribution built on Tron blockchain smart contract, which makes it fully decentralized, transparent, secure and unstoppable.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"How long is THE MONOPOLY CLUB going to work?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is associated with blockchain will keep working forever. As it is a decentralized system, it is not abided by the rules and regulations set by any government body and cannot be hacked or shut down. It will remain in the Blockchain forever.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Are Smart Contracts Legal in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"The smart contract does not depend on the site, it works on a blockchain that cannot be blocked. TheMonopolyClub does not fall under the legal laws and regulations of any of the countries in the world, it can not be illegal, unless, it will be done specifically for the purpose of attempting to discredit or take under control manually. Smart Contracts are like Bitcoin or NFT, they are not illegal, but also not legal."),s.a.createElement("p",null,"The Monopoly Club is a DeFi Ecosystem and all this is aimed at development, realization of dreams of thousands of people, helping people, transparency, security and decentralization. The Monopoly Club has only good goals, given new technologies that do not depend on governments and banks.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Why THE MONOPOLY CLUB is Not a Pyramid?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Firstly, in a Pyramid scheme, old participants get paid with the money from new participants. Sooner or later the scheme operator decides to pull it to keep their profits. It\u2019s mathematically impossible for this scheme to go on forever anyway."),s.a.createElement("p",null,"Secondly, a Ponzi scheme is always centralized! Every pyramid has an operator who can push the button to stop payouts and claim all the money. Once that happens, the pyramid is done."),s.a.createElement("p",null,"THE MONOPOLY CLUB doesn\u2019t have a single thing in common with the scheme above:      "),s.a.createElement("p",null,"All transactions are made between users: from wallet to wallet. The smart contract balance is always zero. THE MONOPOLY CLUB doesn\u2019t have an administrator who could terminate the project. THE MONOPOLY CLUB is 100% decentralized. To stop the platform, no one can, because it\u2019s functioning is ensured by a smart contract that cannot be deleted or changed.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Do I Need to Withdraw Money from THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB does not retain any funds, Your income arrives instantly into your personal wallet directly from your partners. Only you have access to your wallet and no one else can manage your money.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Is THE MONOPOLY CLUB a Company?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB is NOT a company (especially an investment company) that is managed by a CEO and a board of management, where you can bring a complaint against the system that fails to live up to expectations. In reality, it is a self-executing smart contract instructed to carry out sequences of arithmetic, logical or Pre-determined operations automatically via computer programming in order to serve a specific purpose. As such, there is no middleman or intermediary involved to issue the refund for the initial expense. Just like when you buy an NFT, you cannot get your funds back because the transaction cannot be reversed and when you make the purchase you are agreeing to buy an NFT.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Who Created THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"The idea of THE MONOPOLY CLUB belongs to a group of crypto enthusiasts, who are also participants in the community and have no special privileges.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Who Manages The Platform?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"THE MONOPOLY CLUB platform doesn\u2019t have a manager. The smart contract works on the Tron Blockchain. This means that the platform is fully decentralized(it has no leaders or admins).")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Is THE MONOPOLY CLUB Legal or illegal?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"To put it simply, it\u02bcs neither legal nor illegal. This is because THE MONOPOLY CLUB does not need to be regulated or be approved to operate online, since it is free from government control due to its decentralized nature. Fact is, it is not a corporate entity or company. It does not do business transactions between parties, like an MLM company would."),s.a.createElement("p",null,"THE MONOPOLY CLUB is a system built on pre defined codes deployed by the developers on a blockchain network, we know this as smart contract.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true"},s.a.createElement("summary",null,"Can I Join THE MONOPOLY CLUB in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Absolutely, THE MONOPOLY CLUB is international and you can join from all the countries in the world, you just need a mobile device, tablet or laptop and internet connection."))))))))}}class g extends n.Component{render(){let e="/",t=document.location.href;switch(t.indexOf("/?")>0&&(e=t.split("/?")[1],e=e.split("&")[0],e=e.split("#")[0]),e){case"BackOffice":case"backOffice":case"backoffice":return s.a.createElement(T,null);case"ViewOffice":case"viewOffice":case"viewoffice":return s.a.createElement(T,null);default:return s.a.createElement(w,null)}}}var N=g,x=document.getElementById("root");i.a.render(s.a.createElement(N,null),x)}},[[13,1,2]]]);
//# sourceMappingURL=main.6dde0739.chunk.js.map