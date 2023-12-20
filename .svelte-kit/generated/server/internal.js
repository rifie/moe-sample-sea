
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\n\t\t<script type=\"module\">\n\t\t\t// Import the functions you need from the SDKs you need\n\t\t\timport { initializeApp } from \"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js\";\n\t\t\t// TODO: Add SDKs for Firebase products that you want to use\n\t\t\t// https://firebase.google.com/docs/web/setup#available-libraries\n\t\t  \n\t\t\t// Your web app's Firebase configuration\n\t\t\tconst firebaseConfig = {\n\t\t\t  apiKey: \"AIzaSyCFvLmqD2IcfLz2I8VuABqnppBHZHi9CC8\",\n\t\t\t  authDomain: \"moengage-sample-53159.firebaseapp.com\",\n\t\t\t  projectId: \"moengage-sample-53159\",\n\t\t\t  storageBucket: \"moengage-sample-53159.appspot.com\",\n\t\t\t  messagingSenderId: \"336416138049\",\n\t\t\t  appId: \"1:336416138049:web:041e6a5fc29ea80dc8b7c0\"\n\t\t\t};\n\t\t  \n\t\t\t// Initialize Firebase\n\t\t\tconst app = initializeApp(firebaseConfig);\n\n\n\t\t\t!function(e,n,i,t,a,r,o,d){var s=e[a]=e[a]||[];if(s.invoked=0,s.initialised>0||s.invoked>0)return console.error(\"MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!\"),!1;e.moengage_object=a;var l={},g=function n(i){return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];(e.moengage_q=e.moengage_q||[]).push({f:i,a:t})}},u=[\"track_event\",\"add_user_attribute\",\"add_first_name\",\"add_last_name\",\"add_email\",\"add_mobile\",\"add_user_name\",\"add_gender\",\"add_birthday\",\"destroy_session\",\"add_unique_user_id\",\"moe_events\",\"call_web_push\",\"track\",\"location_type_attribute\"],m={onsite:[\"getData\",\"registerCallback\"]};for(var c in u)l[u[c]]=g(u[c]);for(var v in m)for(var f in m[v])null==l[v]&&(l[v]={}),l[v][m[v][f]]=g(v+\".\"+m[v][f]);r=n.createElement(i),o=n.getElementsByTagName(\"head\")[0],r.async=1,r.src=t,o.appendChild(r),e.moe=e.moe||function(){return(s.invoked=s.invoked+1,s.invoked>1)?(console.error(\"MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!\"),!1):(d=arguments.length<=0?void 0:arguments[0],l)},r.addEventListener(\"load\",function(){if(d)return e[a]=e.moe(d),e[a].initialised=e[a].initialised+1||1,!0}),r.addEventListener(\"error\",function(){return console.error(\"Moengage Web SDK loading failed.\"),!1})}(window,document,\"script\",\"https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js\",\"Moengage\");\n\n\t\t\tMoengage = moe({\n\t\t\t\tapp_id:\"32CIEEX5VX43302A2BQH85ND\",\n\t\t\t\tdebug_logs: 0\n\t\t\t});\n\t\t\t\n\t\t  </script>\n\n\t\t  \n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "9cvfcl"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
