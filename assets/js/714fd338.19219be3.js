"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="Set up Trusted Execution Environment (TEE)",s={unversionedId:"node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee",id:"node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee",title:"Set up Trusted Execution Environment (TEE)",description:"In case the ParaTime you want to run does not require the use of a TEE (e.g.",source:"@site/docs/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee.md",sourceDirName:"node/run-your-node/prerequisites",slug:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee",permalink:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee.md",tags:[],version:"current",lastUpdatedAt:1678435523,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{},sidebar:"operators",previous:{title:"System Configuration",permalink:"/node/run-your-node/prerequisites/system-configuration"},next:{title:"Validator Node",permalink:"/node/run-your-node/validator-node/"}},l={},u=[{value:"BIOS Configuration",id:"bios-configuration",level:2},{value:"Ensure Clock Synchronization",id:"ensure-clock-synchronization",level:2},{value:"Install SGX Linux Driver",id:"install-sgx-linux-driver",level:2},{value:"Ubuntu 18.04/16.04",id:"ubuntu-18041604",level:3},{value:"Fedora 34/33",id:"fedora-3433",level:3},{value:"Other Distributions",id:"other-distributions",level:3},{value:"Verification",id:"verification",level:3},{value:"Ensure Proper SGX Device Permissions",id:"ensure-proper-sgx-device-permissions",level:2},{value:"Ensure <code>/dev</code> is NOT Mounted with the <code>noexec</code> Option",id:"ensure-dev-is-not-mounted-with-the-noexec-option",level:2},{value:"Install AESM Service",id:"install-aesm-service",level:2},{value:"Ubuntu 22.04/20.04/18.04",id:"ubuntu-220420041804",level:3},{value:"Docker-enabled System",id:"docker-enabled-system",level:3},{value:"Podman-enabled System",id:"podman-enabled-system",level:3},{value:"Check SGX Setup",id:"check-sgx-setup",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Install Rust Nightly",id:"install-rust-nightly",level:3},{value:"Build and Install sgxs-tools",id:"build-and-install-sgxs-tools",level:3},{value:"Run <code>sgx-detect</code> Tool",id:"run-sgx-detect-tool",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Missing <code>libsgx-aesm-epid-plugin</code>",id:"missing-libsgx-aesm-epid-plugin",level:3},{value:"Permission Denied When Accessing SGX Kernel Device",id:"permission-denied-when-accessing-sgx-kernel-device",level:3},{value:"Error Opening SGX Kernel Device",id:"error-opening-sgx-kernel-device",level:3},{value:"Unable to Launch Enclaves",id:"unable-to-launch-enclaves",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-trusted-execution-environment-tee"},"Set up Trusted Execution Environment (TEE)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In case the ParaTime you want to run does not require the use of a TEE (e.g.\nIntel SGX), you can skip setting up a TEE.")),(0,o.kt)("p",null,"If the ParaTime is configured to run in a TEE (currently only ",(0,o.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html"},"Intel SGX"),"), you\nmust make sure that your system supports running SGX enclaves. This requires\nthat your hardware has SGX support, that SGX support is enabled and that the\nadditional driver and software components are properly installed and running."),(0,o.kt)("h2",{id:"bios-configuration"},"BIOS Configuration"),(0,o.kt)("p",null,"To enable Intel SGX on your hardware, you also need to configure the BIOS.\nFirst, ",(0,o.kt)("strong",{parentName:"p"},"update the BIOS to the latest version with the latest microcode")," and\nthen proceed with BIOS configuration as shown below. Note that some settings may\nnot apply to your BIOS. In that case, configure only the relevant ones. Please\nset the BIOS settings as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SGX"),": ENABLE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hyper-Threading"),": DISABLE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intel SpeedStep"),": DISABLE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SecureBoot"),": DISABLE  (not necessary for recent kernels)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"All Internal Graphics"),": DISABLE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Turbo Mode"),": DISABLE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU AES"),": ENABLE")),(0,o.kt)("p",null,"To test if your settings are correct, you may use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/tools/tree/main/attestation-tool#readme"},"attestation tool"),"\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/tools/releases"},"binary"),") for testing remote attestation against Intel SGX's\ndevelopment server."),(0,o.kt)("h2",{id:"ensure-clock-synchronization"},"Ensure Clock Synchronization"),(0,o.kt)("p",null,"Due to additional sanity checks within runtime enclaves, you should ensure that\nthe node's local clock is synchronized (e.g. using NTP). If it is off by more\nthan half a second you may experience unexpected runtime aborts."),(0,o.kt)("h2",{id:"install-sgx-linux-driver"},"Install SGX Linux Driver"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In case you are running Linux kernel version 5.11 or higher, the required SGX\ndriver is already included and no additional installation is needed so you may\nskip this section.")),(0,o.kt)("p",null,"On older distributions see below for instructions on how to install the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/intel/linux-sgx-driver"},"legacy (out-of-tree) driver"),"."),(0,o.kt)("h3",{id:"ubuntu-18041604"},"Ubuntu 18.04/16.04"),(0,o.kt)("p",null,"A convenient way to install the SGX Linux driver on Ubuntu 18.04/16.04 systems\nis to use the ",(0,o.kt)("a",{parentName:"p",href:"https://edp.fortanix.com/docs/installation/guide/"},"Fortanix"),"'s\nAPT repository and its ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic_Kernel_Module_Support"},"DKMS"),"\npackage."),(0,o.kt)("p",null,"First add Fortanix's APT repository to your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb https://download.fortanix.com/linux/apt xenial main" | sudo tee /etc/apt/sources.list.d/fortanix.list >/dev/null\ncurl -sSL "https://download.fortanix.com/linux/apt/fortanix.gpg" | sudo -E apt-key add -\n')),(0,o.kt)("p",null,"And then install the ",(0,o.kt)("inlineCode",{parentName:"p"},"intel-sgx-dkms")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install intel-sgx-dkms\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/confidential-computing/quick-create-portal"},"Azure Confidential Computing instances"),"\nhave the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/driver/linux"},"Intel SGX DCAP driver"),"\npre-installed."),(0,o.kt)("p",{parentName:"admonition"},"To determine that, run ",(0,o.kt)("inlineCode",{parentName:"p"},"dmesg | grep -i sgx")," and observe if a line like the\nfollowing is shown:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"[    4.991649] sgx: intel_sgx: Intel SGX DCAP Driver v1.33\n")),(0,o.kt)("p",{parentName:"admonition"},"If that is the case, you need to blacklist the Intel SGX DCAP driver's module by\nrunning:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'echo "blacklist intel_sgx" | sudo tee -a /etc/modprobe.d/blacklist-intel_sgx.conf >/dev/null\n'))),(0,o.kt)("h3",{id:"fedora-3433"},"Fedora 34/33"),(0,o.kt)("p",null,"A convenient way to install the SGX Linux driver on Fedora 34/33 systems is to\nuse the Oasis-provided ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sgx-driver-kmod"},"Fedora Package for the Legacy Intel SGX Linux Driver"),"."),(0,o.kt)("h3",{id:"other-distributions"},"Other Distributions"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://01.org/intel-software-guard-extensions/downloads"},"Intel SGX Downloads"),'\npage and find the latest "Intel SGX Linux Release" (',(0,o.kt)("em",{parentName:"p"},"not"),' "Intel SGX DCAP\nRelease") and download the "Intel (R) SGX Installers" for your distribution. The\npackage will have ',(0,o.kt)("inlineCode",{parentName:"p"},"driver")," in the name (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx_linux_x64_driver_2.11.0_2d2b795.bin"),")."),(0,o.kt)("h3",{id:"verification"},"Verification"),(0,o.kt)("p",null,"After installing the driver and restarting your system, make sure that the one\nof the SGX devices exists (the exact device name depends on which driver is\nbeing used):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sgx_enclave")," (since Linux kernel 5.11)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/dev/isgx")," (legacy driver)")),(0,o.kt)("h2",{id:"ensure-proper-sgx-device-permissions"},"Ensure Proper SGX Device Permissions"),(0,o.kt)("p",null,"Make sure that the user that is running the Oasis Node binary has access to the\nSGX device (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/sgx_enclave"),"). This can usually be achieved by adding\nthe user into the right group, for example in case the permissions of the SGX\ndevice are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crw-rw---- 1 root sgx 10, 125 Oct 28 09:28 /dev/sgx_enclave\n")),(0,o.kt)("p",null,"and the user running Oasis Node is ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis"),", you can do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser oasis sgx\n")),(0,o.kt)("p",null,"Failure to do so may result in permission denied errors during runtime startup."),(0,o.kt)("h2",{id:"ensure-dev-is-not-mounted-with-the-noexec-option"},"Ensure ",(0,o.kt)("inlineCode",{parentName:"h2"},"/dev")," is NOT Mounted with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"noexec")," Option"),(0,o.kt)("p",null,"Some Linux distributions mount ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"noexec")," mount option. If that is\nthe case, it will prevent the enclave loader from mapping executable pages."),(0,o.kt)("p",null,"Ensure your ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev")," (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"devtmpfs"),") is not mounted with the ",(0,o.kt)("inlineCode",{parentName:"p"},"noexec")," option.\nTo check that, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /proc/mounts | grep devtmpfs\n")),(0,o.kt)("p",null,"To temporarily remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"noexec")," mount option for ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mount -o remount,exec /dev\n")),(0,o.kt)("p",null,"To permanently remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"noexec")," mount option for ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev"),", add the following to\nthe system's ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"devtmpfs        /dev        devtmpfs    defaults,exec 0 0\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is the recommended way to modify mount options for virtual (i.e. API) file\nsystem as described in ",(0,o.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/wiki/Software/systemd/APIFileSystems/"},"systemd's API File Systems"),"\ndocumentation.")),(0,o.kt)("h2",{id:"install-aesm-service"},"Install AESM Service"),(0,o.kt)("p",null,"To allow execution of SGX enclaves, several ",(0,o.kt)("strong",{parentName:"p"},"Architectural Enclaves (AE)")," are\ninvolved (i.e. Launch Enclave, Provisioning Enclave, Provisioning Certificate\nEnclave, Quoting Enclave, Platform Services Enclaves)."),(0,o.kt)("p",null,"Communication between application-spawned SGX enclaves and Intel-provided\nArchitectural Enclaves is through ",(0,o.kt)("strong",{parentName:"p"},"Application Enclave Service Manager\n(AESM)"),". AESM runs as a daemon and provides a socket through which applications\ncan facilitate various SGX services such as launch approval, remote attestation\nquote signing, etc."),(0,o.kt)("h3",{id:"ubuntu-220420041804"},"Ubuntu 22.04/20.04/18.04"),(0,o.kt)("p",null,"A convenient way to install the AESM service on Ubuntu 22.04/20.04/18.04 systems\nis to use the Intel's ",(0,o.kt)("a",{parentName:"p",href:"https://download.01.org/intel-sgx/sgx_repo/"},"official Intel SGX APT repository"),"."),(0,o.kt)("p",null,"First add Intel SGX APT repository to your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb https://download.01.org/intel-sgx/sgx_repo/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list >/dev/null\ncurl -sSL "https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key" | sudo -E apt-key add -\n')),(0,o.kt)("p",null,"And then install the ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-aesm-service"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"libsgx-aesm-launch-plugin")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"libsgx-aesm-epid-plugin")," packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install sgx-aesm-service libsgx-aesm-launch-plugin libsgx-aesm-epid-plugin\n")),(0,o.kt)("p",null,"The AESM service should be up and running. To confirm that, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status aesmd.service\n")),(0,o.kt)("h3",{id:"docker-enabled-system"},"Docker-enabled System"),(0,o.kt)("p",null,"An easy way to install and run the AESM service on a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/"},"Docker"),"-enabled\nsystem is to use ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/oasisprotocol/aesmd/"},"our AESM container image"),"."),(0,o.kt)("p",null,"Executing the following command should (always) pull the latest version of our\nAESM Docker container, map the SGX devices and ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/run/aesmd")," directory and\nensure AESM is running in the background (also automatically started on boot):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --pull always \\\n  --detach \\\n  --restart always \\\n  --device /dev/sgx_enclave \\\n  --device /dev/sgx_provision \\\n  --volume /var/run/aesmd:/var/run/aesmd \\\n  --name aesmd \\\n  oasisprotocol/aesmd:master\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to use the correct devices based on your ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee#verification"},"kernel version"),".\nThe example above assumes the use of the newer driver which uses two devices.\nFor the legacy driver you need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--device /dev/isgx")," instead.")),(0,o.kt)("h3",{id:"podman-enabled-system"},"Podman-enabled System"),(0,o.kt)("p",null,"Similarly to Docker-enabled systems, an easy way to install and run the AESM\nservice on a ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io"},"Podman"),"-enabled system is to use\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/oasisprotocol/aesmd/"},"our AESM container image"),"."),(0,o.kt)("p",null,"First, create the container with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman create \\\n  --pull always \\\n  --device /dev/sgx_enclave \\\n  --device /dev/sgx_provision \\\n  --volume /var/run/aesmd:/var/run/aesmd:Z \\\n  --name aesmd \\\n  docker.io/oasisprotocol/aesmd\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to use the correct devices based on your ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee#verification"},"kernel version"),".\nThe example above assumes the use of the newer driver which uses two devices.\nFor the legacy driver you need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--device /dev/isgx")," instead.")),(0,o.kt)("p",null,"Then generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"container-aesmd.service")," systemd unit file for it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo podman generate systemd --restart-policy=always --time 10 --name aesmd | \\\n  sed "/\\[Service\\]/a RuntimeDirectory=aesmd" | \\\n  sudo tee /etc/systemd/system/container-aesmd.service\n')),(0,o.kt)("p",null,"Finally, enable and start the ",(0,o.kt)("inlineCode",{parentName:"p"},"container-aesmd.service")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable container-aesmd.service\nsudo systemctl start container-aesmd.service\n")),(0,o.kt)("p",null,"The AESM service should be up and running. To confirm that, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status container-aesmd.service\n")),(0,o.kt)("p",null,"To see the logs of the AESM service, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo podman logs -t -f aesmd\n")),(0,o.kt)("h2",{id:"check-sgx-setup"},"Check SGX Setup"),(0,o.kt)("p",null,"In order to make sure that your SGX setup is working, you can use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect")," tool from the ",(0,o.kt)("a",{parentName:"p",href:"https://lib.rs/crates/sgxs-tools"},"sgxs-tools")," Rust\npackage."),(0,o.kt)("p",null,"There are no pre-built packages for it, so you will need to compile it yourself."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"sgxs-tools must be compiled with a nightly version of the Rust toolchain since\nthey use the ",(0,o.kt)("inlineCode",{parentName:"p"},"#![feature]")," macro.")),(0,o.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("p",null,"Make sure you have the following installed on your system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gcc.gnu.org"},"GCC"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"Protobuf")," compiler."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/Software/pkg-config"},"pkg-config"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openssl.org"},"OpenSSL")," development package.")),(0,o.kt)("p",null,"On Fedora, you can install all the above with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dnf install gcc protobuf-compiler pkg-config openssl-devel\n")),(0,o.kt)("p",null,"On Ubuntu, you can install all the above with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install gcc protobuf-compiler pkg-config libssl-dev\n")),(0,o.kt)("h3",{id:"install-rust-nightly"},"Install ",(0,o.kt)("a",{parentName:"h3",href:"https://www.rust-lang.org"},"Rust")," Nightly"),(0,o.kt)("p",null,"We follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust upstream's recommendation"),"\non using ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup")," to install and manage Rust versions."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"rustup cannot be installed alongside a distribution packaged Rust version. You\nwill need to remove it (if it's present) before you can start using rustup.")),(0,o.kt)("p",null,"Install rustup by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to avoid directly executing a shell script fetched the internet, you\ncan also ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/other.html"},"download ",(0,o.kt)("inlineCode",{parentName:"a"},"rustup-init")," executable for your platform"),"\nand run it manually. This will run ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup-init")," which will download and install\nthe latest stable version of Rust on your system.")),(0,o.kt)("p",null,"Install Rust nightly with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup install nightly-2022-08-22\n")),(0,o.kt)("h3",{id:"build-and-install-sgxs-tools"},"Build and Install sgxs-tools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly-2022-08-22 install sgxs-tools\n")),(0,o.kt)("h3",{id:"run-sgx-detect-tool"},"Run ",(0,o.kt)("inlineCode",{parentName:"h3"},"sgx-detect")," Tool"),(0,o.kt)("p",null,"After the installation completes, run ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect")," to make sure that everything\nis set up correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo $(which sgx-detect)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you don't run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect")," tool as ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),", it might not have the\nnecessary permissions to access the SGX kernel device.")),(0,o.kt)("p",null,"When everything works, you should get output similar to the following (some\nthings depend on hardware features so your output may differ):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Detecting SGX, this may take a minute...\n\u2714  SGX instruction set\n  \u2714  CPU support\n  \u2714  CPU configuration\n  \u2714  Enclave attributes\n  \u2714  Enclave Page Cache\n  SGX features\n    \u2714  SGX2  \u2714  EXINFO  \u2714  ENCLV  \u2714  OVERSUB  \u2714  KSS\n    Total EPC size: 92.8MiB\n\u2718  Flexible launch control\n  \u2714  CPU support\n  \uff1f CPU configuration\n  \u2718  Able to launch production mode enclave\n\u2714  SGX system software\n  \u2714  SGX kernel device (/dev/isgx)\n  \u2718  libsgx_enclave_common\n  \u2714  AESM service\n  \u2714  Able to launch enclaves\n    \u2714  Debug mode\n    \u2718  Production mode\n    \u2714  Production mode (Intel whitelisted)\n")),(0,o.kt)("p",null,"The important part is the checkbox under ",(0,o.kt)("em",{parentName:"p"},"Able to launch enclaves")," in both\n",(0,o.kt)("em",{parentName:"p"},"Debug mode")," and ",(0,o.kt)("em",{parentName:"p"},"Production mode (Intel whitelisted)"),"."),(0,o.kt)("p",null,"In case you encounter errors, see the ",(0,o.kt)("a",{parentName:"p",href:"https://edp.fortanix.com/docs/installation/help/"},"list of common SGX installation issues"),"\nfor help."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"See  ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/troubleshooting"},"the general troubleshooting section"),", before\nproceeding with ParaTime node-specific troubleshooting."),(0,o.kt)("h3",{id:"missing-libsgx-aesm-epid-plugin"},"Missing ",(0,o.kt)("inlineCode",{parentName:"h3"},"libsgx-aesm-epid-plugin")),(0,o.kt)("p",null,"If you are encountering the following error message in your node's logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"failed to initialize TEE: error while getting quote info from AESMD: aesm: error 30\n")),(0,o.kt)("p",null,"Ensure you have all required SGX driver libraries installed as listed in\n",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#install-sgx-linux-driver"},"Install SGX Linux Driver section"),".\nPrevious versions of this guide were missing the ",(0,o.kt)("inlineCode",{parentName:"p"},"libsgx-aesm-epid-plugin"),"."),(0,o.kt)("h3",{id:"permission-denied-when-accessing-sgx-kernel-device"},"Permission Denied When Accessing SGX Kernel Device"),(0,o.kt)("p",null,"If running ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect --verbose")," reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ud83d\udd6e  SGX system software > SGX kernel device\nPermission denied while opening the SGX device (/dev/sgx/enclave, /dev/sgx or\n/dev/isgx). Make sure you have the necessary permissions to create SGX enclaves.\nIf you are running in a container, make sure the device permissions are\ncorrectly set on the container.\n\ndebug: Error opening device: Permission denied (os error 13)\ndebug: cause: Permission denied (os error 13)\n")),(0,o.kt)("p",null,"Ensure you are running the ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect")," tool as ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo $(which sgx-detect) --verbose\n")),(0,o.kt)("h3",{id:"error-opening-sgx-kernel-device"},"Error Opening SGX Kernel Device"),(0,o.kt)("p",null,"If running ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect --verbose")," reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\ud83d\udd6e  SGX system software > SGX kernel device\nThe SGX device (/dev/sgx/enclave, /dev/sgx or /dev/isgx) could not be opened:\n"/dev" mounted with `noexec` option.\n\ndebug: Error opening device: "/dev" mounted with `noexec` option\ndebug: cause: "/dev" mounted with `noexec` option\n')),(0,o.kt)("p",null,"Ensure your system's ",(0,o.kt)("a",{parentName:"p",href:"#ensure-dev-is-not-mounted-with-the-noexec-option"},(0,o.kt)("inlineCode",{parentName:"a"},"/dev")," is NOT mounted with the ",(0,o.kt)("inlineCode",{parentName:"a"},"noexec")," mount option"),"."),(0,o.kt)("h3",{id:"unable-to-launch-enclaves"},"Unable to Launch Enclaves"),(0,o.kt)("p",null,"If running ",(0,o.kt)("inlineCode",{parentName:"p"},"sgx-detect --verbose")," reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ud83d\udd6e  SGX system software > Able to launch enclaves > Debug mode\nThe enclave could not be launched.\n\ndebug: failed to load report enclave\ndebug: cause: failed to load report enclave\ndebug: cause: Failed to map enclave into memory.\ndebug: cause: Operation not permitted (os error 1)\n")),(0,o.kt)("p",null,"Ensure your system's ",(0,o.kt)("a",{parentName:"p",href:"#ensure-dev-is-not-mounted-with-the-noexec-option"},(0,o.kt)("inlineCode",{parentName:"a"},"/dev")," is NOT mounted with the ",(0,o.kt)("inlineCode",{parentName:"a"},"noexec")," mount option"),"."))}c.isMDXComponent=!0}}]);