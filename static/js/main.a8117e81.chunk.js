(this["webpackJsonpusdt-forsage"]=this["webpackJsonpusdt-forsage"]||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(16),l=a.n(i),r=a(2),o=a(3),c=a(5),p=a(4),d=a(1),u=a(6),m=a(7),y=a.n(m);var b=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint8",name:"_decimals",type:"uint8"},{internalType:"uint256",name:"initialSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"BurnLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_blackListedUser",type:"address"},{indexed:!1,internalType:"uint256",name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"IssueLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_evilUser",type:"address"},{internalType:"string",name:"_reason",type:"string"}],name:"addBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"blacklistReason",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cancelOwnershipTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"increaseIssueLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isBlackListed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"issue",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipTransferDeadline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"reciveOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"redeem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"reduceBurnLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var h=[{inputs:[{internalType:"address",name:"_tokenUSDT",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"MissedEthReceive",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"},{indexed:!1,internalType:"uint8",name:"place",type:"uint8"}],name:"NewUserPlace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!0,internalType:"uint256",name:"userId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"referrerId",type:"uint256"}],name:"Registration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"currentReferrer",type:"address"},{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Reinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"SentExtraEthDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint8",name:"matrix",type:"uint8"},{indexed:!1,internalType:"uint8",name:"level",type:"uint8"}],name:"Upgrade",type:"event"},{constant:!1,inputs:[{internalType:"uint8",name:"_level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"ChangeLevelPrice",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenOTRO",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenUSDT",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"LAST_LEVEL",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"buyNewLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"currentStartingLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"findFreeX3Referrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToAddress",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isUserExists",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastUserId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"levelPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrerAddress",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"registrationExt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tokenOTRO",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenUSDT",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"partnersCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersActiveX3Levels",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint8",name:"level",type:"uint8"}],name:"usersX3Matrix",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"address[]",name:"",type:"address[]"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawLostOTROFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostTRXFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostUSDTFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];const f=new(a(17).a)(null,{path:"/"});var w=a(37);const v="https://rpc.cardona.zkevm-rpc.com",E="0x07216598f9fc6186C949172aF12d2BDFc83c9882",g="0x0000000000000000000000000000000000000000";var T=function(e){function t(e){var a,n,i,l;return Object(r.a)(this,t),n=this,i=t,l=[e],i=Object(d.a)(i),(a=Object(c.a)(n,Object(p.a)()?Reflect.construct(i,l||[],Object(d.a)(n).constructor):i.apply(n,l))).state={decimals:6,owner:g,addressToken:g,walletView:g,sponsor:g,aprovedUSDT:new w(0),balanceUSDT:new w(0),levelPrice:new w(0),ganado:new w(0),idSponsor:new w(0),admin:!1,tokenName:"",id:new w(0),wallet:g,level:0,team:"0",texto:"Loading...",link:"Loading...",canastas:[],levelsPrice:[],image:s.a.createElement(s.a.Fragment,null),metamask:{installed:!1,logged:!1,viewer:!1},contract:{ready:!1,web3:null,token:null,principal:null},intervalo:null},a.conectar=a.conectar.bind(a),a.estado=a.estado.bind(a),a.withdraw=a.withdraw.bind(a),a.deposit=a.deposit.bind(a),a.getSponsor=a.getSponsor.bind(a),a.changeToken=a.changeToken.bind(a),a.getTeam=a.getTeam.bind(a),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:async function(){var e=this;let t=setInterval((function(){e.estado()}),5e3);this.setState({intervalo:t})}},{key:"componentWillUnmount",value:async function(){clearInterval(this.state.intervalo)}},{key:"conectar",value:async function(){let{contract:e,wallet:t,walletView:a,metamask:n}=this.state,s=new y.a(v);if("undefined"!==typeof window.ethereum){n.installed=!0,t=await window.ethereum.request({method:"eth_requestAccounts"}).then((async function(e){return n.logged=!0,e[0]})).catch((function(e){return n.logged=!1,console.log(e),g})),s=new y.a(window.ethereum);let e=2442;await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+e.toString(16)}]}).catch((async function(t){console.log(t),await window.ethereum.request({jsonrpc:"2.0",method:"wallet_addEthereumChain",params:[{chainId:"0x"+e.toString(16),chainName:"Polygon TestNet-zkevm",rpcUrls:[v],nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18},blockExplorerUrls:["https://cardona-zkevm.polygonscan.com/"]}],id:0})}))}else n.viewer=!0,n.installed=!1,n.logged=!1;let i=t;e.web3=s,e.principal=new s.eth.Contract(h,E);let l=await e.principal.methods.owner().call({from:i}),r=await e.principal.methods.tokenUSDT().call({from:i});e.token=new s.eth.Contract(b,r);let o=parseInt(await e.token.methods.decimals().call({from:i})),c=await e.token.methods.symbol().call({from:i});if(e.ready=!0,this.props.isView){let t=document.location.href;if(t.indexOf("&wallet=")>0){t=t.split("&wallet=")[1],t=t.split("&")[0],t=t.split("#")[0],t=t.toLowerCase();try{a=s.utils.toChecksumAddress(t)}catch(p){let n="Error: "+p.toString().split("Error:")[1];console.log(n),a=await e.principal.methods.idToAddress(parseInt(t)).call({from:i})}finally{await e.principal.methods.isUserExists(a).call({from:i})||(alert("user is not exists. Register first."),a=g)}}i=a,a===g&&(a=await e.principal.methods.owner().call({from:i}))}return this.setState({metamask:n,contract:e,addressToken:r,decimals:o,tokenName:c,owner:l,wallet:t,walletView:a}),e.ready}},{key:"estado",value:async function(){var e=this;let{wallet:t,walletView:a,owner:n,decimals:i,contract:l,link:r,tokenName:o,metamask:c}=this.state;if(await this.conectar(),!l.ready&&(!c.installed&&!c.logged||c.viewer))return;this.getSponsor(),this.setState({isOwner:n.toLowerCase()===t.toLowerCase()&&t.toLowerCase()!==g});let p=t;this.props.isView&&(t=a);let d=0,u=[];for(var m=15;m>=0;m--)await l.principal.methods.usersActiveX3Levels(t,m).call({from:p})&&d++;let y=await l.principal.methods.levelPrice(d+1).call({from:p});y=new w(parseInt(y)).shiftedBy(-i);let b=await l.token.methods.balanceOf(t).call({from:p});b=new w(parseInt(b)).shiftedBy(-i);let h=await l.token.methods.allowance(t,E).call({from:p});h=new w(parseInt(h)).shiftedBy(-i);let f="Buy | "+y.toString(10)+o;if(0===d&&(f="Register | "+y.toString(10)+o),15===d&&(f="Max Level Reached"),0===h.toNumber()&&(f="CONNECT WALLET"),this.setState({level:d,levelPrice:y,texto:f,balanceUSDT:b,aprovedUSDT:h}),await l.principal.methods.isUserExists(t).call({from:p})){let e=await l.principal.methods.users(t).call({from:p});r=document.location.origin+"?backoffice&ref="+parseInt(e.id),this.setState({id:parseInt(e.id),link:r})}else this.setState({id:"N/A",link:"Make an investment to get the referral LINK"});let{canastas:v,level:T}=this.state,x=0,k=0,N=new w(0),S=[];for(S[1]=20,m=2;m<=15;m++)S[m]=2*S[m-1];for(this.setState({levelsPrice:S}),m=1;m<=15;m++){let a,n,i,r="",c=0;if(m<=T){x+=S[m];let e=await l.principal.methods.usersX3Matrix(t,m).call({from:p});c=parseInt(e[3]),e[1].length>0&&(u=[...u,...e[1]],u=[...new Set(u)]),i=e[1].length+3*c,1===m&&this.setState({team:i}),k+=i;let d=i/3,y=2*parseInt(d);d=(""+d).split("."),d.length>1?(d=d[1],d=d.indexOf("3")>=0?1:2):d=0,y=parseInt(y)+parseInt(d),N=new w(y).times(S[m]).plus(N);let b=e[1].length+3*c%3;if(i>0)switch(b){case 1:a="#009030",n="white",r="white";break;case 2:a="#009030",n="#009030",r="white";break;case 0:a="#009030",n="#009030",r="#009030";break;default:a="white",n="white",r="white"}v[m-1]=s.a.createElement("div",{className:"item",key:"level"+m},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},m),s.a.createElement("span",{style:{color:"white"}},S[m].toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",o),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge",style:{color:a}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge",style:{color:n}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge",style:{color:r}},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success",style:{color:"black",width:"80%",backgroundColor:"gray",cursor:"not-allowed",fontWeight:"bold",borderRadius:"5px",borderStyle:"none"}}," Buyed"),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users",style:{color:i>0?"#009030":""}})," ",i," ","  |  ",s.a.createElement("i",{className:"fa fa-refresh",style:{color:c>0?"#009030":""}})," ",c)}else v[m-1]=s.a.createElement("div",{className:"item",key:"level-"+m},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},m," "),s.a.createElement("span",{style:{color:"white"}},S[m].toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",o),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge"},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn",onClick:function(){e.deposit()},style:{color:"white",width:"80%",backgroundColor:"#009030",borderRadius:"5px",fontWeight:"bold",borderStyle:"none"}}," ",s.a.createElement("b",null,"Buy Level")),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users"})," 0 ","  |  ",s.a.createElement("i",{className:"fa fa-refresh"})," 0");this.setState({canastas:v})}this.setState({invertido:x,ganado:N,personas:k});let M=s.a.createElement(s.a.Fragment,null),C="";N.toNumber()>=2e3&&T>=4&&(C="1"),N.toNumber()>=1e4&&T>=6&&(C="2"),N.toNumber()>=1e5&&T>=9&&(C="3"),N.toNumber()>=1e6&&T>=13&&(C="4"),N.toNumber()>=1e7&&T>=14&&(C="5"),N.toNumber()>=5e7&&T>=15&&(C="6"),N.toNumber()>=1e8&&T>=15&&(C="7"),""!==C&&(M=s.a.createElement("img",{style:{width:"150px"},src:"images/avatars/sello-"+C+".png",alt:"sello level"})),this.setState({image:M})}},{key:"getTeam",value:async function(e){let t=e.length;for(let a=0;a<e.length;a++)t++;return this.setState({team:t}),t}},{key:"getSponsor",value:async function(){let{owner:e,wallet:t,contract:a}=this.state,n=t,s=e,i=document.location.href;if(await a.principal.methods.isUserExists(t).call({from:n})){s=(await a.principal.methods.users(t).call({from:n})).referrer}else if(s=f.get("sponsor"),void 0===s&&(s=e),i.indexOf("?")>0){let e,t=i.split("?")[1].split("&"),o={};for(var l=0,r=t.length;l<r;l++)e=t[l].split("="),o[e[0]]=unescape(decodeURI(e[1]));if(o.ref){e=o.ref.split("#")[0];let t=await a.principal.methods.idToAddress(e).call({from:n});await a.principal.methods.isUserExists(t).call({from:n})&&(s=t,f.set("sponsor",""+s,{maxAge:2592e3}))}}let o=await a.principal.methods.users(s).call({from:n});return this.setState({sponsor:s,idSponsor:new w(o.id)}),s}},{key:"deposit",value:async function(){if(this.props.isView)return;let{level:e,balanceUSDT:t,aprovedUSDT:a,contract:n,wallet:s,decimals:i,levelsPrice:l}=this.state;e++;let r=s;if(e>parseInt(await n.principal.methods.LAST_LEVEL().call({from:r})))window.alert("You reached the last level");else if(l[e]>t.toNumber())window.alert("You do not have enough funds in your account");else if(a.toNumber()<=l[e])try{await n.token.methods.approve(E,new w("100000000").shiftedBy(i).toString(10)).send({from:r,gasPrice:"10000000",gas:1e6})}catch(o){console.log(o),window.alert("Error approve: "+o.toString())}else{if(await n.principal.methods.isUserExists(s).call({from:r}))try{await n.principal.methods.buyNewLevel(e,new w(l[e]).shiftedBy(i).toNumber()).send({from:r,gasPrice:"10000000",gas:1e6})}catch(o){return console.log(o),void window.alert("Error buy level: "+o.toString())}else try{let e=await this.getSponsor();this.setState({sponsor:e}),await n.principal.methods.registrationExt(e,new w(l[1]).shiftedBy(i).toNumber()).send({from:r,gasPrice:"10000000",gas:1e6})}catch(o){return console.log(o),void window.alert("Error register: "+o.toString())}this.estado()}}},{key:"withdraw",value:async function(){if(this.props.isView)return;let{contract:e,wallet:t}=this.state;e.principal.methods.withdraw().send({from:t}).then((function(){alert("Is done")})).catch((function(e){alert("Error: "+e.toString())}))}},{key:"changeToken",value:async function(e){if(this.props.isView)return;let{wallet:t,contract:a}=this.state;a.methods.ChangeTokenUSDT(e).sen({from:t}).then((function(){alert("change is done")})).catch(console.error)}},{key:"render",value:function(){var e=this;let{wallet:t,walletView:a,id:n,balanceUSDT:i,level:l,texto:r,link:o,idSponsor:c,sponsor:p,ganado:d,personas:u,canastas:m,isOwner:y,team:b,addressToken:h,tokenName:f,image:w}=this.state;this.props.isView&&(t=a);let v=s.a.createElement(s.a.Fragment,null);return y&&!this.props.isView&&(v=s.a.createElement(s.a.Fragment,null,"Change principal token: ",s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.changeToken("0xc2132D05D31c914a87C6611C10748AEb04B58e8F")}},"USDT"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063")}},"DAI"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359")}},"USDC"))),s.a.createElement("div",{style:{width:"100%",display:"block",marginTop:"100px",padding:"0 1.1rem 0 1.1rem",fontSize:"16px",color:"white",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",gridAutoRows:"minmax(100px, auto)"}},s.a.createElement("div",null,w),s.a.createElement("div",null,s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"PROFIT"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},d.dp(2).toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",f))),s.a.createElement("tr",null,s.a.createElement("td",null,"Balance"),s.a.createElement("td",{style:{textAlign:"right"}},i.dp(2).toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",s.a.createElement("strong",null,f))),s.a.createElement("tr",null,s.a.createElement("td",null,"Level"),s.a.createElement("td",{style:{textAlign:"right"}},l,"/15")),s.a.createElement("tr",null,s.a.createElement("td",null,"Partners"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},b.toString(10)))),s.a.createElement("tr",null,s.a.createElement("td",null,"Depth"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},u))),s.a.createElement("tr",null,s.a.createElement("td",null,"My ID"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},s.a.createElement("span",{style:{fontWeight:"bold"}},n.toString(10),":",t))),s.a.createElement("tr",null,s.a.createElement("td",null,"Sponsor"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},c.toString(10),":",p))))),s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){return e.deposit()},style:{width:"100%",color:"white",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},r)),s.a.createElement("div",null,s.a.createElement("p",{style:{border:"solid white",borderRadius:"5px",padding:"2px",marginBottom:"5px"}},o),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){""!==o&&(navigator.clipboard.writeText(o),window.alert("link copied!"))},style:{color:"white",width:"100%",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},"Copy referal link ",s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-clipboard text-white"})))),s.a.createElement("div",null,v),s.a.createElement("div",{className:"contenedor-flex"},m),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("p",{style:{wordBreak:"break-all"}},s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-users"})," Number Partners on Level"),s.a.createElement("br",null),s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-refresh"})," Level Cycle")),s.a.createElement("hr",{color:"white"}),s.a.createElement("p",null,"Address Token: ",s.a.createElement("br",null),h)))}}])}(n.Component);const x=new(new y.a("https://rpc.cardona.zkevm-rpc.com").eth.Contract)(h,"0x07216598f9fc6186C949172aF12d2BDFc83c9882");let k=function(e){function t(e){var a,n,s,i;return Object(r.a)(this,t),n=this,s=t,i=[e],s=Object(d.a)(s),(a=Object(c.a)(n,Object(p.a)()?Reflect.construct(s,i||[],Object(d.a)(n).constructor):s.apply(n,i))).state={users:"###",last24:"###"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(async function(){try{const e=await x.methods.lastUserId().call({from:"0x0000000000000000000000000000000000000000"});return console.log("\xdaltimo ID de usuario:",e.toString()),e.toString()}catch(e){console.error("Error al obtener lastUserId:",e)}})().then((function(t){e.setState({users:t})})),async function(){const e=Math.floor(Date.now()/1e3)-86400,t=(await x.getPastEvents("Registration",{fromBlock:"earliest",toBlock:"latest"})).filter((function(t){return t.returnValues.timestamp>=e})).map((function(e){return e.returnValues.user}));return console.log("Usuarios en las \xfaltimas 24 horas:",t.length),t.length}().then((function(t){e.setState({last24:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{id:"home",className:"s-home target-section","data-parallax":"scroll","data-image-src":"../../images/hero-bg.jpg","data-natural-width":"3000","data-natural-height":"2000","data-position-y":"center"},s.a.createElement("div",{className:"overlay"}),s.a.createElement("div",{className:"shadow-overlay"}),s.a.createElement("div",{className:"home-content"},s.a.createElement("div",{className:"row home-content__main"},s.a.createElement("h1",null,"#1 Descentralized USDT Blockchain Ecosystem"),s.a.createElement("div",{className:"home-content__buttons"},s.a.createElement("a",{href:"#view",className:"smoothscroll btn btn--stroke"},"Account Preview"),s.a.createElement("a",{href:"/?backoffice",className:"smoothscroll btn btn--stroke"},"Back Office"))),s.a.createElement("div",{className:"home-content__line"}))),s.a.createElement("section",{id:"about",className:"s-about"},s.a.createElement("div",{className:"row about-stats stats block-1-4 block-m-1-2 block-mob-full"},s.a.createElement("div",{className:"col-six stats__col "},s.a.createElement("div",{className:"stats__count"},this.state.users),s.a.createElement("h5",null,"All participants")),s.a.createElement("div",{className:"col-six stats__col "},s.a.createElement("div",{className:"stats__count"},this.state.last24),s.a.createElement("h5",null,"Joined in 24H"))),s.a.createElement("div",{className:"about__line"})),s.a.createElement("section",{id:"services",className:"s-services"},s.a.createElement("div",{className:"row section-header has-bottom-sep"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2",style:{color:"white"}},"The Next Generation DeFi Ecosystem"))),s.a.createElement("div",{className:"row services-list block-1-2 block-tab-full"},s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-paint-brush"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Immutability"),s.a.createElement("p",null,"Blockchain secures the algorithm, therefore nobody, even the creators or developers, can change, cancel, stop, or alter your transactions."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-group"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Automatic"),s.a.createElement("p",null,"All transactions between the community members are executed directly from one personal wallet to another. TMC smart contract does not store your funds."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-megaphone"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Autonomus"),s.a.createElement("p",null,"The ecosystem is built on the smart contract technology that is completely autonomous, which excludes any human factor. There are not hidden costs or service fees. The smart contract balance is always 0(zero)."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-earth"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Transparent an decentralized"),s.a.createElement("p",null,"The smart contract code is open, and anyone anytime can observe the entire transaction history. There are no managers or admins at the head."))))),s.a.createElement("section",{id:"clients",className:"s-clients"},s.a.createElement("div",{className:"row section-header"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2"},"FREQUENTLY ASKED QUESTIONS"))),s.a.createElement("div",{className:"row clients-testimonials"},s.a.createElement("div",{className:"col-full"},s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"What is THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC is the first USDT marketing matrix in history with immediate transactions distribution from wallet to wallet, built on smart contract from Polygon\u2019s blockchain, which makes it fully decentralized, transparent, secure and unstoppable.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Do I Need to Withdraw my earnings from THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC does not retain any funds, Your earnings arrives instantly and directly into your personal wallet directly from your partners. Only you have access to your wallet and no one else can manage your earnings.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Who Manages The Platform?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC platform doesn\u2019t have a manager. The smart contract works on the Polygon\u2019s Blockchain. This means that the platform is fully decentralized(it has no leaders or admins).")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Can I Join THE MONOPOLY CLUB in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Absolutely, TMC is international and you can join from all the countries in the world, you just need a mobile device, tablet or laptop and internet connection.")))))),s.a.createElement("div",{id:"view",className:"row section-header",style:{marginTop:"125px"}},s.a.createElement("div",{className:"col-full",style:{textAlign:"center"}},s.a.createElement("h2",{className:"display-2"},"Account Preview"),s.a.createElement("p",null,"Loock up any TMC member account in preview mode."),s.a.createElement("form",{action:"/?",method:"GET"},s.a.createElement("input",{type:"hidden",name:"viewoffice",value:!0}),s.a.createElement("input",{style:{display:"block",marginRight:"auto",marginLeft:"auto",width:"80%",textAlign:"center",backgroundColor:"lightgray",border:"none",borderRadius:"7px"},type:"text",name:"wallet",placeholder:"ID or Wallet"}),s.a.createElement("button",{type:"submit",style:{width:"80%",color:"white",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},"Preview"))))))}}])}(n.Component);function N(e,t,a){return t=Object(d.a)(t),Object(c.a)(e,Object(p.a)()?Reflect.construct(t,a||[],Object(d.a)(e).constructor):t.apply(e,a))}var S=function(e){function t(){return Object(r.a)(this,t),N(this,t,arguments)}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){let e="/",t=document.location.href;switch(t.indexOf("/?")>0&&(e=t.split("/?")[1],e=e.split("=")[0],e=e.split("&")[0],e=e.split("#")[0]),e=e.toLowerCase(),e){case"app":case"backoffice":return s.a.createElement(T,null);case"wallet":case"view":case"viewoffice":return s.a.createElement(T,{isView:!0});default:return s.a.createElement(k,null)}}}])}(n.Component),M=document.getElementById("root");l.a.render(s.a.createElement(S,null),M)}},[[18,1,2]]]);
//# sourceMappingURL=main.a8117e81.chunk.js.map