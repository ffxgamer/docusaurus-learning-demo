"use strict";(self.webpackChunkdocusaurus_learning_demo=self.webpackChunkdocusaurus_learning_demo||[]).push([[834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},k=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(m,s(s({ref:t},k),{},{components:n})):r.createElement(m,s({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"readme",title:"k3s\u90e8\u7f72\u6307\u5357",tag:["k3s","k8s","devops"]},s="k3s\u90e8\u7f72\u6307\u5357",i={unversionedId:"k3s/readme",id:"k3s/readme",title:"k3s\u90e8\u7f72\u6307\u5357",description:"\u672c\u6307\u5357\u4ec5\u5199\u51fa\u5e38\u89c1\u64cd\u4f5c,\u5e76\u4e0d\u5c3d\u5b8c\u5584, \u5982\u9700\u5b8c\u6574\u6587\u6863,\u8bf7\u67e5\u770bk3s\u5b98\u7f51\u6587\u6863",source:"@site/docs/k3s/readme.md",sourceDirName:"k3s",slug:"/k3s/",permalink:"/docusaurus-learning-demo/zh/docs/k3s/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/k3s/readme.md",tags:[],version:"current",frontMatter:{id:"readme",title:"k3s\u90e8\u7f72\u6307\u5357",tag:["k3s","k8s","devops"]},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docusaurus-learning-demo/zh/docs/intro"},next:{title:"first",permalink:"/docusaurus-learning-demo/zh/docs/mdx/first"}},o={},u=[{value:"1. \u5b89\u88c5k3s",id:"1-\u5b89\u88c5k3s",level:2},{value:"1.1 TL;DR",id:"11-tldr",level:3},{value:"1.2 \u901a\u8fc7k9s\u547d\u4ee4\u67e5\u770bpod\u542f\u52a8\u60c5\u51b5",id:"12-\u901a\u8fc7k9s\u547d\u4ee4\u67e5\u770bpod\u542f\u52a8\u60c5\u51b5",level:3},{value:"1.3 \u4ee5\u4e0a\u64cd\u4f5c\u4f1a\u5b89\u88c5",id:"13-\u4ee5\u4e0a\u64cd\u4f5c\u4f1a\u5b89\u88c5",level:3},{value:"1.4 \u6dfb\u52a0\u65b0node",id:"14-\u6dfb\u52a0\u65b0node",level:3},{value:"2. \u5b89\u88c5\u95ee\u9898",id:"2-\u5b89\u88c5\u95ee\u9898",level:2},{value:"2.1 \u5982\u5b89\u88c5\u65f6\u63d0\u793apermission deny\u7b49\u4fe1\u606f",id:"21-\u5982\u5b89\u88c5\u65f6\u63d0\u793apermission-deny\u7b49\u4fe1\u606f",level:3},{value:"2.2 \u5b89\u88c5\u65f6\u6267\u884crun.sh\u811a\u672c\u51fa\u73b0\u5927\u91cf\u9519\u8bef",id:"22-\u5b89\u88c5\u65f6\u6267\u884crunsh\u811a\u672c\u51fa\u73b0\u5927\u91cf\u9519\u8bef",level:3},{value:"3. \u57fa\u7840\u5e94\u7528\u5165\u53e3",id:"3-\u57fa\u7840\u5e94\u7528\u5165\u53e3",level:2},{value:"3.1 servicemanager",id:"31-servicemanager",level:3},{value:"3.2 docker registry",id:"32-docker-registry",level:3},{value:"3.3 postgresql",id:"33-postgresql",level:3},{value:"4 \u5176\u4ed6k3s\u76f8\u5173",id:"4-\u5176\u4ed6k3s\u76f8\u5173",level:2},{value:"4.1 k3s\u914d\u7f6e\u6587\u4ef6",id:"41-k3s\u914d\u7f6e\u6587\u4ef6",level:3},{value:"4.2 insecure registry",id:"42-insecure-registry",level:3},{value:"4.3 \u5916\u90e8\u8bbf\u95ee\u7528\u7684kubeconfig\u6587\u4ef6",id:"43-\u5916\u90e8\u8bbf\u95ee\u7528\u7684kubeconfig\u6587\u4ef6",level:3},{value:"5. \u5176\u4ed6\u547d\u4ee4",id:"5-\u5176\u4ed6\u547d\u4ee4",level:2},{value:"5.1 k9s",id:"51-k9s",level:3},{value:"5.2 kubectl debug(\u6682\u9700\u8981\u7f51\u7edc,\u5f85\u4fee\u590d)",id:"52-kubectl-debug\u6682\u9700\u8981\u7f51\u7edc\u5f85\u4fee\u590d",level:3},{value:"5.3 service-manager/update.sh\u811a\u672c",id:"53-service-managerupdatesh\u811a\u672c",level:3},{value:"6. \u79bb\u7ebf\u652f\u6301",id:"6-\u79bb\u7ebf\u652f\u6301",level:2},{value:"6.1 \u5b8c\u5168\u65e0\u7f51\u7edc\u60c5\u51b5(\u65e0\u7f51\u5173\u6216ip)",id:"61-\u5b8c\u5168\u65e0\u7f51\u7edc\u60c5\u51b5\u65e0\u7f51\u5173\u6216ip",level:3}],k={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k3s\u90e8\u7f72\u6307\u5357"},"k3s\u90e8\u7f72\u6307\u5357"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6307\u5357\u4ec5\u5199\u51fa\u5e38\u89c1\u64cd\u4f5c,\u5e76\u4e0d\u5c3d\u5b8c\u5584, \u5982\u9700\u5b8c\u6574\u6587\u6863,\u8bf7\u67e5\u770bk3s\u5b98\u7f51\u6587\u6863")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/rancher/k3s")),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5b89\u88c5\u5305\u5236\u4f5c: pengwenming"),(0,a.kt)("li",{parentName:"ul"},"Date: 2020-04-27")),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5k3s"},"1. \u5b89\u88c5k3s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f: \u9700\u8981\u63d0\u524d\u914d\u7f6e\u670d\u52a1\u5668\u7684ip\u4e0e\u7f51\u5173, \u5982\u5b8c\u5168\u65ad\u7f51, \u6ca1\u6709ip\u548c\u7f51\u5173,\u53ef\u53c2\u8003 ",(0,a.kt)("strong",{parentName:"li"},"6. \u79bb\u7ebf\u652f\u6301"))),(0,a.kt)("h3",{id:"11-tldr"},"1.1 TL;DR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\ntar xvf 0.X_docker.tar.gz\ncd 0.X_docker\n./run.sh\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u6839\u636e\u670d\u52a1\u5668\u6027\u80fd\u9700\u8981\u6301\u7eed1\u5206\u949f\u5230\u51e0\u5206\u949f\u4e4b\u95f4"),(0,a.kt)("h3",{id:"12-\u901a\u8fc7k9s\u547d\u4ee4\u67e5\u770bpod\u542f\u52a8\u60c5\u51b5"},"1.2 \u901a\u8fc7k9s\u547d\u4ee4\u67e5\u770bpod\u542f\u52a8\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k9s\n# \u63090 \u67e5\u770b\u6240\u6709namespace\n")),(0,a.kt)("p",null,"\u68c0\u67e5pod\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm-install\u5f00\u5934\u7684pod STATUS\u4e3aCompleted"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6pod STATUS\u4e3aRunning")),(0,a.kt)("h3",{id:"13-\u4ee5\u4e0a\u64cd\u4f5c\u4f1a\u5b89\u88c5"},"1.3 \u4ee5\u4e0a\u64cd\u4f5c\u4f1a\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u673a\u7248k3s server"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u673a\u7248k3s agent"),(0,a.kt)("li",{parentName:"ul"},"k8s"),(0,a.kt)("li",{parentName:"ul"},"helm3"),(0,a.kt)("li",{parentName:"ul"},"k9s"),(0,a.kt)("li",{parentName:"ul"},"flannel (vxlan \u63d0\u4f9bcni\u7f51\u7edc)"),(0,a.kt)("li",{parentName:"ul"},"traefik (\u63d0\u4f9bingress\u57df\u540d\u4ee3\u7406)"),(0,a.kt)("li",{parentName:"ul"},"coredns (\u63d0\u4f9bdns\u89e3\u6790)"),(0,a.kt)("li",{parentName:"ul"},"docker-registry (\u63d0\u4f9b\u79c1\u6709docker\u955c\u50cf)"),(0,a.kt)("li",{parentName:"ul"},"[New]"," docker-registry-ui (\u63d0\u4f9b\u67e5\u770b,\u5220\u9664docker\u955c\u50cf\u7684web\u754c\u9762) "),(0,a.kt)("li",{parentName:"ul"},"hostpath-provisioner (\u63d0\u4f9b\u5355\u673a\u7248\u672c\u5730storageclass)"),(0,a.kt)("li",{parentName:"ul"},"postgresql11 (\u63d0\u4f9bservicemanager\u7684\u6570\u636e\u5e93, \u6682\u65e0\u5176\u4ed6\u63d2\u4ef6)"),(0,a.kt)("li",{parentName:"ul"},"metrics-server (\u63d0\u4f9bcpu,\u5185\u5b58\u7b49\u53c2\u6570\u7684\u76d1\u63a7\u6570\u636e)"),(0,a.kt)("li",{parentName:"ul"},"minio (\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8)"),(0,a.kt)("li",{parentName:"ul"},"servicemanager (\u63d0\u4f9bsynyi\u5e94\u7528\u90e8\u7f72)")),(0,a.kt)("h3",{id:"14-\u6dfb\u52a0\u65b0node"},"1.4 \u6dfb\u52a0\u65b0node"),(0,a.kt)("p",null,"\u63d0\u4f9bagent.sh\u811a\u672c\u5e2e\u52a9\u5feb\u901f\u90e8\u7f72node\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./agent.sh [server ip] [server_k3s_token]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u76f4\u63a5\u4ece./run.sh\u540e\u63d0\u4f9b\u7684\u4fe1\u606f\u6765\u5b89\u88c5")),(0,a.kt)("p",null,"server_k3s_token\u4eceserver\u670d\u52a1\u5668\u53d6\u5f97"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/k3s/server/node-token\n")),(0,a.kt)("h2",{id:"2-\u5b89\u88c5\u95ee\u9898"},"2. \u5b89\u88c5\u95ee\u9898"),(0,a.kt)("h3",{id:"21-\u5982\u5b89\u88c5\u65f6\u63d0\u793apermission-deny\u7b49\u4fe1\u606f"},"2.1 \u5982\u5b89\u88c5\u65f6\u63d0\u793apermission deny\u7b49\u4fe1\u606f"),(0,a.kt)("p",null,"\u6709\u65f6\u56e0\u4e3a\u5728windows\u4e0a\u89e3\u538b,\u5bfc\u81f4\u6743\u9650\u4e22\u5931, \u9700\u8981\u5bf9\u6587\u4ef6\u91cd\u65b0\u8d4b\u503c\u6743\u9650"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ./k3s\n")),(0,a.kt)("h3",{id:"22-\u5b89\u88c5\u65f6\u6267\u884crunsh\u811a\u672c\u51fa\u73b0\u5927\u91cf\u9519\u8bef"},"2.2 \u5b89\u88c5\u65f6\u6267\u884crun.sh\u811a\u672c\u51fa\u73b0\u5927\u91cf\u9519\u8bef"),(0,a.kt)("p",null,"\u68c0\u67e5 k3s\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status k3s\n")),(0,a.kt)("p",null,"\u68c0\u67e5docker\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status docker\n")),(0,a.kt)("p",null,"\u5148\u89e3\u51b3docker\u95ee\u9898, \u518d\u89e3\u51b3k3s\u95ee\u9898\n\u53ef\u5148\u5c1d\u8bd5\u91cd\u542fdocker \u4e0e k3s\u89e3\u51b3\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart docker\nsystemctl restart k3s\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u5e38\u89c1\u95ee\u9898:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u914d\u7f6e\u6b63\u786e\u7684ip\u4e0e\u9ed8\u8ba4\u7f51\u5173"),(0,a.kt)("li",{parentName:"ol"},"\u6743\u9650\u4e0d\u6b63\u786e,\u9700\u8981\u4f7f\u7528root\u6743\u9650"),(0,a.kt)("li",{parentName:"ol"},"docker\u4e4b\u524d\u5b89\u88c5\u8fc7,\u51b2\u7a81"),(0,a.kt)("li",{parentName:"ol"},"k3s\u6ca1\u6709\u5378\u8f7d\u5e72\u51c0")),(0,a.kt)("h2",{id:"3-\u57fa\u7840\u5e94\u7528\u5165\u53e3"},"3. \u57fa\u7840\u5e94\u7528\u5165\u53e3"),(0,a.kt)("h3",{id:"31-servicemanager"},"3.1 servicemanager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u5730\u5740: ${host_ip}:35000\n")),(0,a.kt)("h3",{id:"32-docker-registry"},"3.2 docker registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u5730\u5740: registry.k8s.com\n\u6216\n\u5730\u5740: ${host_ip}:31500\n")),(0,a.kt)("p",null,"[New]"," Web UI\n\u8bbf\u95ee\u6d4f\u89c8\u5668: ${host_ip}:31500"),(0,a.kt)("p",null,"tips: servicemanager\u5df2\u4f7f\u7528registry.k8s.com\u4f5c\u4e3a\u9ed8\u8ba4registry\u5730\u5740,\n\u8bf7\u4f7f\u7528registry.k8s.com\u4f5c\u4e3a\u955c\u50cf\u5730\u5740\u4f7f\u7528"),(0,a.kt)("h3",{id:"33-postgresql"},"3.3 postgresql"),(0,a.kt)("p",null,"\u7248\u672cpostgres11-alpine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u5730\u5740: postgres (\u540c\u5728kube-system\u547d\u540d\u7a7a\u95f4\u4e0b, \u5982servicemanager)\n\u5730\u5740: ${host_ip}:31432 \u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee\n     postgres.kube-system \u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee\ndb: postgres user: postgres pass: postgres\n")),(0,a.kt)("h2",{id:"4-\u5176\u4ed6k3s\u76f8\u5173"},"4 \u5176\u4ed6k3s\u76f8\u5173"),(0,a.kt)("h3",{id:"41-k3s\u914d\u7f6e\u6587\u4ef6"},"4.1 k3s\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/var/lib/rancher/k3s  (k3s\u6240\u6709\u7ec4\u4ef6\u4f4d\u7f6e)"),(0,a.kt)("li",{parentName:"ul"},"/etc/rancher/k3s   (\u90e8\u5206\u914d\u7f6e\u6587\u4ef6)"),(0,a.kt)("li",{parentName:"ul"},"/etc/systemd/system/k3s.service (systemd\u542f\u52a8\u6587\u4ef6)"),(0,a.kt)("li",{parentName:"ul"},"/etc/systemd/system/k3s-agent.service (node\u8282\u70b9\u7684systemd\u542f\u52a8\u6587\u4ef6)"),(0,a.kt)("li",{parentName:"ul"},"/usr/local/bin/k3s-uninstall.sh (\u5220\u9664k3s\u7684\u811a\u672c)"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin/docker*   (docker\u8fd0\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e)"),(0,a.kt)("li",{parentName:"ul"},"/var/lib/kubelet/host-path-provisioner-volumes/ (\u6301\u4e45\u5316\u5b58\u50a8\u5b58\u7684\u6587\u4ef6\u6240\u5728)"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin  (\u6267\u884c\u6587\u4ef6\u5b89\u653e\u4f4d\u7f6e)")),(0,a.kt)("h3",{id:"42-insecure-registry"},"4.2 insecure registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'vim /etc/docker/daemon.json\n{\n  "insecure-registries" : ["${host_ip}:31500", "registry.k8s.com"]\n}\n')),(0,a.kt)("h3",{id:"43-\u5916\u90e8\u8bbf\u95ee\u7528\u7684kubeconfig\u6587\u4ef6"},"4.3 \u5916\u90e8\u8bbf\u95ee\u7528\u7684kubeconfig\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"~/.kube/config\n")),(0,a.kt)("h2",{id:"5-\u5176\u4ed6\u547d\u4ee4"},"5. \u5176\u4ed6\u547d\u4ee4"),(0,a.kt)("h3",{id:"51-k9s"},"5.1 k9s"),(0,a.kt)("p",null,"k9s\u63d0\u4f9b\u64cd\u4f5ck8s\u96c6\u7fa4\u7684cli\u754c\u9762"),(0,a.kt)("p",null,"\u5e38\u89c1\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\nk9s\n# \u5e2e\u52a9\n?\n\n# \u5207\u6362namespace\n:ns \u5207\u6362\u5230namespace\u754c\u9762\n\u4e0a\u4e0b\u952e\u9009\u62e9\u9700\u8981\u5207\u6362\u7684ns\n\u4e5f\u53ef\u4f7f\u7528'/'\u641c\u7d22\u5173\u952e\u5b57\n\n\u4e4b\u524d\u5207\u6362\u8fc7\u7684ns\u4f1a\u5728\u4e0a\u65b9\u663e\u793a\u5feb\u6377\u952e,\u4e4b\u540e\u4f7f\u7528\n0 1 2\u7b49\u6570\u5b57\u952e\u5207\u6362\n\n# \u5207\u6362pod deploy svc ing\u7b49resource\n:po  -> pod\n:no  -> node\n:dp  -> deployment\n:svc -> service\n:ing -> ingress\n# \u67e5\u770bresource\u7684\u522b\u540d\n:alias \u6216 ctrl + a\n# \u67e5\u770b\u65e5\u5fd7\nl  \u5f53\u524dcontainer\nshift + l \u4e4b\u524d\u7684container\n# \u67e5\u770bdescribe\u4fe1\u606f\nd\n# \u8fdb\u5165\u5bb9\u5668\u6267\u884c\u547d\u4ee4\ns\n# \u91cd\u542f\u5bb9\u5668\nctrl + k \u6216\nctrl + d -> tab -> tab -> enter\n# \u67e5\u627e\n/\u9700\u8981\u67e5\u770b\u7684\u6587\u5b57\n\n# \u7f16\u8f91\ne\n\n# \u9000\u51fa\nesc \u9000\u51fa\u5f53\u524d\u754c\u9762,\u6216\u6e05\u695a\u7b5b\u9009\np   \u8fd4\u56de\u4e0a\u4e00\u6b21\u7684\u754c\u9762\nctrl + c \u9000\u51fa\u6574\u4e2ak9s\n:wq \u9000\u51fa\u7f16\u8f91\u754c\u9762\n")),(0,a.kt)("h3",{id:"52-kubectl-debug\u6682\u9700\u8981\u7f51\u7edc\u5f85\u4fee\u590d"},"5.2 kubectl debug(\u6682\u9700\u8981\u7f51\u7edc,\u5f85\u4fee\u590d)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9884\u88c5\u4e86pod debug\u547d\u4ee4,\u65b9\u4fbf\u8c03\u8bd5\u7a0b\u5e8f\nexample:\nkubectl debug <pod-name> -n <namespace> --agentless\n\n# \u5982\u679cpod\u5904\u4e8ecrashloopbackoff\u4e2d,\u9700\u8981\u8c03\u8bd5,\u6dfb\u52a0--fork\u4f1a\u590d\u5236\u4e00\u4e2a\u4e00\u6478\u4e00\u6837\u7684pod\nkubectl debug <pod-name> -n <namespace> --fork --agentless\n# \u6ce8\u610f\u8c03\u8bd5\u5b8c\u53ef\u80fd\u9700\u8981\u5220\u9664\u590d\u5236\u7684pod(\u4ee5debugger\u7ed3\u5c3e)\n")),(0,a.kt)("h3",{id:"53-service-managerupdatesh\u811a\u672c"},"5.3 service-manager/update.sh\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u628a\u65b0\u7684servicemanager.tar \u955c\u50cf\u5305\u653e\u5230service-manager\u76ee\u5f55\u4e0b\n./update.sh\n")),(0,a.kt)("h2",{id:"6-\u79bb\u7ebf\u652f\u6301"},"6. \u79bb\u7ebf\u652f\u6301"),(0,a.kt)("h3",{id:"61-\u5b8c\u5168\u65e0\u7f51\u7edc\u60c5\u51b5\u65e0\u7f51\u5173\u6216ip"},"6.1 \u5b8c\u5168\u65e0\u7f51\u7edc\u60c5\u51b5(\u65e0\u7f51\u5173\u6216ip)"),(0,a.kt)("p",null,"\u5982\u679c\u7f51\u7edc\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528,\u65e0\u7f51\u72b6\u6001(\u5982\u7f51\u53e3\u6ca1\u63a5\u7f51\u7ebf,\u65e0\u7ebf\u6ca1\u6709\u8fdewifi)\n",(0,a.kt)("strong",{parentName:"p"},"!!k3s\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528!!"),"\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u8def\u7531"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ip -c address add 192.168.123.123/24 dev eno1\nsudo ip route add default via 192.168.123.1\n")))}c.isMDXComponent=!0}}]);