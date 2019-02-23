(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/quick_start.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,i(t).call(this,e))).layout=null,n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"quick-start"}},"Quick start"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"build-your-first-application"}},"Build your first application"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The easiest way to get started is to skip installing everything on your local machine and just use our fully hosted IDE environment.  To do this:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Go to ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://studio.nearprotocol.com"}},"NEAR Studio"),' and select the "ToDo MVC" template.'),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},'Click "Run" to see the app running!')),o.a.createElement(r.MDXTag,{name:"p",components:t},"The app will open in a new window. It's using the blockchain as its backend."),o.a.createElement(r.MDXTag,{name:"p",components:t},"A few things to note:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The code that runs on blockchain is in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"assembly/main.ts")," file."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The JavaScript frontend code is in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"src/main.js")," file."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The UI markup is in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"src/main.html file"),".")),o.a.createElement(r.MDXTag,{name:"p",components:t},'Try changing any of these files. To see your changes, click the "Save" button, and then "Run" button.'),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"try-the-block-explorer--debugger"}},"Try the block explorer / debugger"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once you have tested out the NEAR Studio IDE, check out the Block Explorer (aka Debugger)."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Navigate to ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://studio.nearprotocol.com/debugger/"}},"https://studio.nearprotocol.com/debugger/")," in your browser to see information on specific blocks and transactions from those blocks.  This is a useful tool when you are trying to debug your contracts."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Another very useful tool is to open up your console's JavaScript console, where you will be able to print logs and errors."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"build--run-a-node-from-source"}},"Build & Run a node from source"),o.a.createElement(r.MDXTag,{name:"p",components:t},"You should be able to do anything you want with the above-mentioned NEAR Studio IDE and the Block Explorer.  If you want to keep digging deeper, try running the local DevNet yourself."),o.a.createElement(r.MDXTag,{name:"p",components:t},'"DevNet" is a locally hosted single-node "blockchain" that runs WebAssembly and State transition without actually running full blockchain/consensus functionality.  Essentially, you can interact with it as if it was a blockchain for the purposes of writing and testing code.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is exactly what currently runs the DevNet that supports apps deployed using the NEAR Studio IDE (though that DevNet is hosted in the cloud by us)."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In this case, we'll walk through how you can set up your own local DevNet."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"Note that this will be more fragile and prone to weird errors at this stage of the development cycle!  If you're trying to build an app, we recommend staying in NEAR Studio for now!")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"1-setup-rust"}},"1. Setup Rust:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"$ curl https://sh.rustup.rs -sSf | sh\n// You may need to restart the terminal to use the new PATH\n$ rustup component add clippy-preview\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"You may need to activate the environment via ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},". ~/.cargo/env")," to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"cargo"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"2-download-near-core-code"}},"2. Download NEAR Core code:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"$ git clone https://github.com/nearprotocol/nearcore\n$ cd nearcore\n")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"3-set-up-your-keypair"}},"3. Set up your keypair"),o.a.createElement(r.MDXTag,{name:"p",components:t},"First, generate a cryptographic key pair.  The code below will save a pair of keys into the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"keystore")," folder to use with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"rpc.py"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"cargo run --package keystore -- keygen --test-seed alice.near\n")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"4-build-devnet"}},"4. Build DevNet"),o.a.createElement(r.MDXTag,{name:"p",components:t},"After following the instructions above to set up Rust, download the source code, build and then run DevNet:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"cargo run --release --package=devnet\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"-- --log-level debug")," to see more information about RPC and transaction processing. For more flags use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"-- --help"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"5-test-it-out"}},"5. Test it Out"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Try submitting transactions or views via ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.jsonrpc.org/specification"}},"JSON RPC"),". There is a Python script that wraps the RPC:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"# See usage of rpc helper script\n./scripts/rpc.py --help\n\n# Get usage of sub command\n./scripts/rpc.py send_money --help\n\n# Send money\n./scripts/rpc.py send_money -r bob.near -a 1\n\n# Create a new account for the contract\n./scripts/rpc.py create_account test_contract 1\n\n# Deploy code for the smart contract account\n./scripts/rpc.py deploy test_contract tests/hello.wasm\n\n# Call method 'setValue' for contract 'test_contract' and pass arguments\n./scripts/rpc.py schedule_function_call test_contract setValue --args '{\"value\":\"testtest\"}'\n\n# Call view function 'getValue' for contract 'test_contract'\n./scripts/rpc.py call_view_function test_contract getValue\n\n# Call view function 'benchmark_sum_n' for contract 'test_contract' and pass n=500000\n./scripts/rpc.py call_view_function test_contract benchmark_sum_n --args='{\"n\":500000}'\n\n# View state for Bob's account\n./scripts/rpc.py view_account -a bob.near\n\n# Create an account\n./scripts/rpc.py create_account cindy 1\n\n# View full state db of the contract\n./scripts/rpc.py view_state test_contract\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"running-testnet-locally"}},"Running TestNet locally"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"Note: This is advanced functionality which may be more brittle than usual. Proceed at your own peril.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Navigate to the root of the project. To start the network from a new state remove the storage:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"rm -rf test1 test2\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Launch the boot node:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"cargo run -- --addr 127.0.0.1:3000 --rpc_port 3030 --base-path=test1 --test-network-key-seed 1 --chain-spec-file ./node/configs/res/testnet_chain.json\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The boot node will print the string that we can use to boot from it. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"To boot from this node: 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Launch the second node using the first one as the boot:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"cargo run -- -a bob.near --addr 127.0.0.1:3001 --rpc_port 3031 --base-path=test2 --test-network-key-seed 2 --chain-spec-file ./node/configs/res/testnet_chain.json --boot-nodes 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Submit account creation transaction on one node:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"./scripts/rpc.py create_account jason 1 --public-key 22skMptHjFWNyuEWY22ftn2AbLPSYpmYwGJRGwpNHbTV\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Verify that the account was created by checking it on the other node:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"./scripts/rpc.py view_account -a jason -u http://127.0.0.1:3031/\n")))}}])&&p(n.prototype,a),c&&p(n,c),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-quick-start.8705f0be1bed72beb9a3.js.map