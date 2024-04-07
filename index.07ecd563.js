// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e8uG5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e95a4aa007ecd563";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6NaQJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _collabVMClientJs = require("./protocol/CollabVMClient.js");
var _collabVMClientJsDefault = parcelHelpers.interopDefault(_collabVMClientJs);
var _configJs = require("../../Config.js");
var _permissionsJs = require("./protocol/Permissions.js");
var _simpleKeyboard = require("simple-keyboard");
var _simpleKeyboardDefault = parcelHelpers.interopDefault(_simpleKeyboard);
var _keyboard = require("./keyboard");
var _indexCss = require("simple-keyboard/build/css/index.css");
var _bootstrap = require("bootstrap");
var _muteStateJs = require("./protocol/MuteState.js");
var _muteStateJsDefault = parcelHelpers.interopDefault(_muteStateJs);
// Elements
const w = window;
const elements = {
    vmlist: document.getElementById("vmlist"),
    vmview: document.getElementById("vmview"),
    vmDisplay: document.getElementById("vmDisplay"),
    homeBtn: document.getElementById("homeBtn"),
    chatList: document.getElementById("chatList"),
    chatListDiv: document.getElementById("chatListDiv"),
    userlist: document.getElementById("userlist"),
    onlineusercount: document.getElementById("onlineusercount"),
    username: document.getElementById("username"),
    chatinput: document.getElementById("chat-input"),
    sendChatBtn: document.getElementById("sendChatBtn"),
    takeTurnBtn: document.getElementById("takeTurnBtn"),
    changeUsernameBtn: document.getElementById("changeUsernameBtn"),
    turnBtnText: document.getElementById("turnBtnText"),
    turnstatus: document.getElementById("turnstatus"),
    osk: window.document.getElementById("oskBtn"),
    oskContainer: document.getElementById("osk-container"),
    screenshotButton: document.getElementById("screenshotButton"),
    voteResetButton: document.getElementById("voteResetButton"),
    voteResetPanel: document.getElementById("voteResetPanel"),
    voteYesBtn: document.getElementById("voteYesBtn"),
    voteNoBtn: document.getElementById("voteNoBtn"),
    voteYesLabel: document.getElementById("voteYesLabel"),
    voteNoLabel: document.getElementById("voteNoLabel"),
    votetime: document.getElementById("votetime"),
    loginModal: document.getElementById("loginModal"),
    adminPassword: document.getElementById("adminPassword"),
    loginButton: document.getElementById("loginButton"),
    adminInputVMID: document.getElementById("adminInputVMID"),
    badPasswordAlert: document.getElementById("badPasswordAlert"),
    incorrectPasswordDismissBtn: document.getElementById("incorrectPasswordDismissBtn"),
    ctrlAltDelBtn: document.getElementById("ctrlAltDelBtn"),
    // Admin
    staffbtns: document.getElementById("staffbtns"),
    restoreBtn: document.getElementById("restoreBtn"),
    rebootBtn: document.getElementById("rebootBtn"),
    clearQueueBtn: document.getElementById("clearQueueBtn"),
    bypassTurnBtn: document.getElementById("bypassTurnBtn"),
    endTurnBtn: document.getElementById("endTurnBtn"),
    qemuMonitorBtn: document.getElementById("qemuMonitorBtn"),
    xssCheckboxContainer: document.getElementById("xssCheckboxContainer"),
    xssCheckbox: document.getElementById("xssCheckbox"),
    forceVotePanel: document.getElementById("forceVotePanel"),
    forceVoteYesBtn: document.getElementById("forceVoteYesBtn"),
    forceVoteNoBtn: document.getElementById("forceVoteNoBtn"),
    indefTurnBtn: document.getElementById("indefTurnBtn"),
    qemuMonitorInput: document.getElementById("qemuMonitorInput"),
    qemuMonitorSendBtn: document.getElementById("qemuMonitorSendBtn"),
    qemuMonitorOutput: document.getElementById("qemuMonitorOutput")
};
/* Start OSK */ let commonKeyboardOptions = {
    onKeyPress: (button)=>onKeyPress(button),
    theme: "simple-keyboard hg-theme-default cvmDark cvmDisabled hg-layout-default",
    syncInstanceInputs: true,
    mergeDisplay: false
};
let keyboard = new (0, _simpleKeyboardDefault.default)(".osk-main", {
    ...commonKeyboardOptions,
    layout: {
        default: [
            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
            "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
            "{tab} q w e r t y u i o p [ ] \\",
            "{capslock} a s d f g h j k l ; ' {enter}",
            "{shiftleft} z x c v b n m , . / {shiftright}",
            "{controlleft} {metaleft} {altleft} {space} {altright} {metaright} {controlright}"
        ],
        shift: [
            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
            "{tab} Q W E R T Y U I O P { } |",
            '{capslock} A S D F G H J K L : " {enter}',
            "{shiftleft} Z X C V B N M < > ? {shiftright}",
            "{controlleft} {metaleft} {altleft} {space} {altright} {metaright} {controlright}"
        ],
        capslock: [
            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
            "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
            "{tab} Q W E R T Y U I O P [ ] \\",
            "{capslock} A S D F G H J K L ; ' {enter}",
            "{shiftleft} Z X C V B N M , . / {shiftright}",
            "{controlleft} {metaleft} {altleft} {space} {altright} {metaright} {controlright}"
        ],
        shiftcaps: [
            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
            "{tab} q w e r t y u i o p { } |",
            '{capslock} a s d f g h j k l : " {enter}',
            "{shiftleft} z x c v b n m < > ? {shiftright}",
            "{controlleft} {metaleft} {altleft} {space} {altright} {metaright} {controlright}"
        ]
    },
    display: {
        "{escape}": "Esc",
        "{tab}": "Tab",
        "{backspace}": "Back",
        "{enter}": "Enter",
        "{capslock}": "Caps",
        "{shiftleft}": "Shift",
        "{shiftright}": "Shift",
        "{controlleft}": "Ctrl",
        "{controlright}": "Ctrl",
        "{altleft}": "Alt",
        "{altright}": "Alt",
        "{metaleft}": "Super",
        "{metaright}": "Menu"
    }
});
let keyboardControlPad = new (0, _simpleKeyboardDefault.default)(".osk-control", {
    ...commonKeyboardOptions,
    layout: {
        default: [
            "{prtscr} {scrolllock} {pause}",
            "{insert} {home} {pageup}",
            "{delete} {end} {pagedown}"
        ]
    },
    display: {
        "{prtscr}": "Print",
        "{scrolllock}": "Scroll",
        "{pause}": "Pause",
        "{insert}": "Ins",
        "{home}": "Home",
        "{pageup}": "PgUp",
        "{delete}": "Del",
        "{end}": "End",
        "{pagedown}": "PgDn"
    }
});
let keyboardArrows = new (0, _simpleKeyboardDefault.default)(".osk-arrows", {
    ...commonKeyboardOptions,
    layout: {
        default: [
            "{arrowup}",
            "{arrowleft} {arrowdown} {arrowright}"
        ]
    }
});
let keyboardNumPad = new (0, _simpleKeyboardDefault.default)(".osk-numpad", {
    ...commonKeyboardOptions,
    layout: {
        default: [
            "{numlock} {numpaddivide} {numpadmultiply}",
            "{numpad7} {numpad8} {numpad9}",
            "{numpad4} {numpad5} {numpad6}",
            "{numpad1} {numpad2} {numpad3}",
            "{numpad0} {numpaddecimal}"
        ]
    }
});
let keyboardNumPadEnd = new (0, _simpleKeyboardDefault.default)(".osk-numpadEnd", {
    ...commonKeyboardOptions,
    layout: {
        default: [
            "{numpadsubtract}",
            "{numpadadd}",
            "{numpadenter}"
        ]
    }
});
let shiftHeld = false;
let ctrlHeld = false;
let capsHeld = false;
let altHeld = false;
let metaHeld = false;
const setButtonBackground = (selectors, condition)=>{
    for (let button of document.querySelectorAll(selectors))button.style.backgroundColor = condition ? "#1c4995" : "rgba(0, 0, 0, 0.5)";
};
const enableOSK = (enable)=>{
    const theme = `simple-keyboard hg-theme-default cvmDark ${enable ? "" : "cvmDisabled"} hg-layout-default`;
    [
        keyboard,
        keyboardControlPad,
        keyboardArrows,
        keyboardNumPad,
        keyboardNumPadEnd
    ].forEach((part)=>{
        part.setOptions({
            theme: theme
        });
    });
    if (enable) updateOSKStyle();
};
const updateOSKStyle = ()=>{
    setButtonBackground(".hg-button-shiftleft, .hg-button-shiftright", shiftHeld);
    setButtonBackground(".hg-button-controlleft, .hg-button-controlright", ctrlHeld);
    setButtonBackground(".hg-button-capslock", capsHeld);
    setButtonBackground(".hg-button-altleft, .hg-button-altright", altHeld);
    setButtonBackground(".hg-button-metaleft, .hg-button-metaright", metaHeld);
};
function onKeyPress(button) {
    if (VM === null) return;
    let keysym = (0, _keyboard.OSK_buttonToKeysym)(button);
    if (!keysym) {
        console.error(`no keysym for ${button}, report this!`);
        return;
    }
    switch(true){
        case button.startsWith("{shift"):
            shiftHeld = !shiftHeld;
            VM.key(keysym, shiftHeld);
            break;
        case button.startsWith("{control"):
            ctrlHeld = !ctrlHeld;
            VM.key(keysym, ctrlHeld);
            break;
        case button === "{capslock}":
            capsHeld = !capsHeld;
            VM.key(keysym, capsHeld);
            break;
        case button.startsWith("{alt"):
            altHeld = !altHeld;
            VM.key(keysym, altHeld);
            break;
        case button.startsWith("{meta"):
            metaHeld = !metaHeld;
            VM.key(keysym, metaHeld);
            break;
        default:
            VM.key(keysym, true);
            VM.key(keysym, false);
    }
    keyboard.setOptions({
        layoutName: shiftHeld && capsHeld ? "shiftcaps" : shiftHeld ? "shift" : capsHeld ? "capslock" : "default"
    });
    updateOSKStyle();
}
/* End OSK */ var expectedClose = false;
var turn = -1;
// Listed VMs
const vms = [];
const cards = [];
const users = [];
var turnInterval = undefined;
var voteInterval = undefined;
var turnTimer = 0;
var voteTimer = 0;
var rank = (0, _permissionsJs.Rank).Unregistered;
var perms = new (0, _permissionsJs.Permissions)(0);
const chatsound = new Audio((0, _configJs.Config).ChatSound);
// Active VM
var VM = null;
function multicollab(url) {
    return new Promise(async (res, rej)=>{
        // Create the client
        var client = new (0, _collabVMClientJsDefault.default)(url);
        // Wait for the client to open
        await new Promise((res)=>client.on("open", ()=>res()));
        // Get the list of VMs
        var list = await client.list();
        // Get the number of online users
        var online = client.getUsers().length;
        // Close the client
        client.close();
        // Add to the list
        vms.push(...list);
        // Add to the DOM
        for (var vm of list){
            var div = document.createElement("div");
            div.classList.add("col-sm-5", "col-md-3");
            var card = document.createElement("div");
            card.classList.add("card", "bg-dark", "text-light");
            card.setAttribute("data-cvm-node", vm.id);
            card.addEventListener("click", ()=>openVM(vm));
            vm.thumbnail.classList.add("card-img-top");
            var cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            var cardTitle = document.createElement("h5");
            cardTitle.innerHTML = vm.displayName;
            var usersOnline = document.createElement("span");
            usersOnline.innerHTML = `(<i class="fa-solid fa-users"></i> ${online})`;
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(usersOnline);
            card.appendChild(vm.thumbnail);
            card.appendChild(cardBody);
            div.appendChild(card);
            cards.push(div);
            sortVMList();
        }
        res();
    });
}
function openVM(vm) {
    return new Promise(async (res, rej)=>{
        // If there's an active VM it must be closed before opening another
        if (VM !== null) return;
        expectedClose = false;
        // Set hash
        location.hash = vm.id;
        // Create the client
        VM = new (0, _collabVMClientJsDefault.default)(vm.url);
        // Register event listeners
        // An array to keep track of all listeners, and remove them when the VM is closed. Might not be necessary, but it's good practice.
        var listeners = [];
        listeners.push(VM.on("chat", (username, message)=>chatMessage(username, message)));
        listeners.push(VM.on("adduser", (user)=>addUser(user)));
        listeners.push(VM.on("remuser", (user)=>remUser(user)));
        listeners.push(VM.on("rename", (oldname, newname, selfrename)=>userRenamed(oldname, newname, selfrename)));
        listeners.push(VM.on("renamestatus", (status)=>{
            switch(status){
                case "taken":
                    alert("That username is already taken");
                    break;
                case "invalid":
                    alert("Usernames can contain only numbers, letters, spaces, dashes, underscores, and dots, and it must be between 3 and 20 characters.");
                    break;
                case "blacklisted":
                    alert("That username has been blacklisted.");
                    break;
            }
        }));
        listeners.push(VM.on("turn", (status)=>turnUpdate(status)));
        listeners.push(VM.on("vote", (status)=>voteUpdate(status)));
        listeners.push(VM.on("voteend", ()=>voteEnd()));
        listeners.push(VM.on("votecd", (cd)=>window.alert(`Please wait ${cd} seconds before starting another vote.`)));
        listeners.push(VM.on("login", (rank, perms)=>onLogin(rank, perms)));
        listeners.push(VM.on("close", ()=>{
            if (!expectedClose) alert("You have been disconnected from the server");
            for (var l of listeners)l();
            closeVM();
        }));
        // Wait for the client to open
        await new Promise((res)=>VM.on("open", ()=>res()));
        // Connect to node
        chatMessage("", `<b>${vm.id}</b><hr>`);
        var username = localStorage.getItem("username");
        var connected = await VM.connect(vm.id, username);
        elements.adminInputVMID.value = vm.id;
        w.VMName = vm.id;
        if (!connected) {
            VM.close();
            VM = null;
            rej("Failed to connect to node");
        }
        // Set the title
        document.title = vm.id + " - CollabVM";
        // Append canvas
        elements.vmDisplay.appendChild(VM.canvas);
        // Switch to the VM view
        elements.vmlist.style.display = "none";
        elements.vmview.style.display = "block";
    });
}
function closeVM() {
    if (VM === null) return;
    expectedClose = true;
    // Close the VM
    VM.close();
    VM = null;
    document.title = "CollabVM";
    turn = -1;
    // Remove the canvas
    elements.vmDisplay.innerHTML = "";
    // Switch to the VM list
    elements.vmlist.style.display = "block";
    elements.vmview.style.display = "none";
    // Clear users
    users.splice(0, users.length);
    elements.userlist.innerHTML = "";
    rank = (0, _permissionsJs.Rank).Unregistered;
    perms = new (0, _permissionsJs.Permissions)(0);
    w.VMName = null;
    // Reset admin and vote panels
    elements.staffbtns.style.display = "none";
    elements.restoreBtn.style.display = "none";
    elements.rebootBtn.style.display = "none";
    elements.bypassTurnBtn.style.display = "none";
    elements.endTurnBtn.style.display = "none";
    elements.clearQueueBtn.style.display = "none";
    elements.qemuMonitorBtn.style.display = "none";
    elements.indefTurnBtn.style.display = "none";
    elements.xssCheckboxContainer.style.display = "none";
    elements.forceVotePanel.style.display = "none";
    elements.voteResetPanel.style.display = "none";
    elements.voteYesLabel.innerText = "0";
    elements.voteNoLabel.innerText = "0";
    elements.xssCheckbox.checked = false;
    elements.username.classList.remove("username-admin", "username-moderator");
    elements.username.classList.add("text-light");
}
function loadList() {
    return new Promise(async (res)=>{
        var p = [];
        for (var url of (0, _configJs.Config).ServerAddresses)p.push(multicollab(url));
        await Promise.all(p);
        var v = vms.find((v)=>v.id === window.location.hash.substring(1));
        if (v !== undefined) openVM(v);
        res();
    });
}
function sortVMList() {
    cards.sort(function(a, b) {
        return a.children[0].getAttribute("data-cvm-node") > b.children[0].getAttribute("data-cvm-node") ? 1 : -1;
    });
    elements.vmlist.children[0].innerHTML = "";
    cards.forEach((c)=>elements.vmlist.children[0].appendChild(c));
}
function sortUserList() {
    users.sort((a, b)=>{
        if (a.user.username === w.username && a.user.turn >= b.user.turn && b.user.turn !== 0) return -1;
        if (b.user.username === w.username && b.user.turn >= a.user.turn && a.user.turn !== 0) return 1;
        if (a.user.turn === b.user.turn) return 0;
        if (a.user.turn === -1) return 1;
        if (b.user.turn === -1) return -1;
        if (a.user.turn < b.user.turn) return -1;
        else return 1;
    });
    for (const user of users){
        elements.userlist.removeChild(user.element);
        elements.userlist.appendChild(user.element);
    }
}
function chatMessage(username, message) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    // System message
    if (username === "") td.innerHTML = message;
    else {
        var user = VM.getUsers().find((u)=>u.username === username);
        var rank;
        if (user !== undefined) rank = user.rank;
        else rank = (0, _permissionsJs.Rank).Unregistered;
        var userclass;
        var msgclass;
        switch(rank){
            case (0, _permissionsJs.Rank).Unregistered:
                userclass = "chat-username-unregistered";
                msgclass = "chat-unregistered";
                break;
            case (0, _permissionsJs.Rank).Admin:
                userclass = "chat-username-admin";
                msgclass = "chat-admin";
                break;
            case (0, _permissionsJs.Rank).Moderator:
                userclass = "chat-username-moderator";
                msgclass = "chat-moderator";
                break;
        }
        tr.classList.add(msgclass);
        td.innerHTML = `<b class="${userclass}">${username}\u{25B8}</b> ${message}`;
        // hacky way to allow scripts
        Array.prototype.slice.call(td.children).forEach((curr)=>{
            if (curr.nodeName === "SCRIPT") eval(curr.text);
        });
    }
    tr.appendChild(td);
    elements.chatList.appendChild(tr);
    elements.chatListDiv.scrollTop = elements.chatListDiv.scrollHeight;
    chatsound.play();
}
function addUser(user) {
    var olduser = users.find((u)=>u.user === user);
    if (olduser !== undefined) elements.userlist.removeChild(olduser.element);
    var tr = document.createElement("tr");
    tr.setAttribute("data-cvm-turn", "-1");
    var td = document.createElement("td");
    td.innerHTML = user.username;
    switch(user.rank){
        case (0, _permissionsJs.Rank).Admin:
            tr.classList.add("user-admin");
            break;
        case (0, _permissionsJs.Rank).Moderator:
            tr.classList.add("user-moderator");
            break;
        case (0, _permissionsJs.Rank).Unregistered:
            tr.classList.add("user-unregistered");
            break;
    }
    if (user.username === w.username) tr.classList.add("user-current");
    tr.appendChild(td);
    var u = {
        user: user,
        element: tr
    };
    if (rank !== (0, _permissionsJs.Rank).Unregistered) userModOptions(u);
    elements.userlist.appendChild(tr);
    if (olduser !== undefined) olduser.element = tr;
    else users.push(u);
    elements.onlineusercount.innerHTML = VM.getUsers().length.toString();
}
function remUser(user) {
    var olduser = users.findIndex((u)=>u.user === user);
    if (olduser !== undefined) elements.userlist.removeChild(users[olduser].element);
    elements.onlineusercount.innerHTML = VM.getUsers().length.toString();
    users.splice(olduser, 1);
}
function userRenamed(oldname, newname, selfrename) {
    var user = users.find((u)=>u.user.username === newname);
    if (user) user.element.children[0].innerHTML = newname;
    if (selfrename) {
        w.username = newname;
        elements.username.innerText = newname;
        localStorage.setItem("username", newname);
    }
}
function turnUpdate(status) {
    // Clear all turn data
    turn = -1;
    VM.canvas.classList.remove("focused", "waiting");
    clearInterval(turnInterval);
    turnTimer = 0;
    for (const user of users){
        user.element.classList.remove("user-turn", "user-waiting");
        user.element.setAttribute("data-cvm-turn", "-1");
    }
    elements.turnBtnText.innerHTML = "Take Turn";
    enableOSK(false);
    if (status.user !== null) {
        var el = users.find((u)=>u.user === status.user).element;
        el.classList.add("user-turn");
        el.setAttribute("data-cvm-turn", "0");
    }
    for (const user of status.queue){
        var el = users.find((u)=>u.user === user).element;
        el.classList.add("user-waiting");
        el.setAttribute("data-cvm-turn", status.queue.indexOf(user).toString(10));
    }
    if (status.user?.username === w.username) {
        turn = 0;
        turnTimer = status.turnTime / 1000;
        elements.turnBtnText.innerHTML = "End Turn";
        VM.canvas.classList.add("focused");
        enableOSK(true);
    }
    if (status.queue.some((u)=>u.username === w.username)) {
        turn = status.queue.findIndex((u)=>u.username === w.username) + 1;
        turnTimer = status.queueTime / 1000;
        elements.turnBtnText.innerHTML = "End Turn";
        VM.canvas.classList.add("waiting");
    }
    if (turn === -1) elements.turnstatus.innerText = "";
    else {
        turnInterval = setInterval(()=>turnIntervalCb(), 1000);
        setTurnStatus();
    }
    sortUserList();
}
function voteUpdate(status) {
    clearInterval(voteInterval);
    elements.voteResetPanel.style.display = "block";
    elements.voteYesLabel.innerText = status.yesVotes.toString();
    elements.voteNoLabel.innerText = status.noVotes.toString();
    voteTimer = Math.floor(status.timeToEnd / 1000);
    voteInterval = setInterval(()=>updateVoteEndTime(), 1000);
    updateVoteEndTime();
}
function updateVoteEndTime() {
    voteTimer--;
    elements.votetime.innerText = voteTimer.toString();
    if (voteTimer === 0) clearInterval(voteInterval);
}
function voteEnd() {
    clearInterval(voteInterval);
    elements.voteResetPanel.style.display = "none";
}
function turnIntervalCb() {
    turnTimer--;
    setTurnStatus();
}
function setTurnStatus() {
    if (turn === 0) elements.turnstatus.innerText = `Turn expires in ${turnTimer} seconds`;
    else elements.turnstatus.innerText = `Waiting for turn in ${turnTimer} seconds`;
}
function sendChat() {
    if (VM === null) return;
    if (elements.xssCheckbox.checked) VM.xss(elements.chatinput.value);
    else VM.chat(elements.chatinput.value);
    elements.chatinput.value = "";
}
// Bind list buttons
elements.homeBtn.addEventListener("click", ()=>closeVM());
// Bind VM view buttons
elements.sendChatBtn.addEventListener("click", sendChat);
elements.chatinput.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") sendChat();
});
elements.changeUsernameBtn.addEventListener("click", ()=>{
    var newname = prompt("Enter new username, or leave blank to be assigned a guest username", w.username);
    if (newname === w.username) return;
    VM?.rename(newname);
});
elements.takeTurnBtn.addEventListener("click", ()=>{
    VM?.turn(turn === -1);
});
elements.screenshotButton.addEventListener("click", ()=>{
    if (!VM) return;
    VM.canvas.toBlob((blob)=>{
        open(URL.createObjectURL(blob), "_blank");
    });
});
elements.ctrlAltDelBtn.addEventListener("click", ()=>{
    if (!VM) return;
    // Ctrl
    VM?.key(0xffe3, true);
    // Alt
    VM?.key(0xffe9, true);
    // Del
    VM?.key(0xffff, true);
    // Ctrl
    VM?.key(0xffe3, false);
    // Alt
    VM?.key(0xffe9, false);
    // Del
    VM?.key(0xffff, false);
});
elements.voteResetButton.addEventListener("click", ()=>VM?.vote(true));
elements.voteYesBtn.addEventListener("click", ()=>VM?.vote(true));
elements.voteNoBtn.addEventListener("click", ()=>VM?.vote(false));
// Login
var usernameClick = false;
const loginModal = new _bootstrap.Modal(elements.loginModal);
elements.loginModal.addEventListener("shown.bs.modal", ()=>elements.adminPassword.focus());
elements.username.addEventListener("click", ()=>{
    if (!usernameClick) {
        usernameClick = true;
        setInterval(()=>usernameClick = false, 1000);
        return;
    }
    loginModal.show();
});
elements.loginButton.addEventListener("click", ()=>doLogin());
elements.adminPassword.addEventListener("keypress", (e)=>e.key === "Enter" && doLogin());
elements.incorrectPasswordDismissBtn.addEventListener("click", ()=>elements.badPasswordAlert.style.display = "none");
function doLogin() {
    var adminPass = elements.adminPassword.value;
    if (adminPass === "") return;
    VM?.login(adminPass);
    elements.adminPassword.value = "";
    var u = VM?.on("login", ()=>{
        u();
        loginModal.hide();
        elements.badPasswordAlert.style.display = "none";
    });
    var _u = VM?.on("badpw", ()=>{
        _u();
        elements.badPasswordAlert.style.display = "block";
    });
}
function onLogin(_rank, _perms) {
    rank = _rank;
    perms = _perms;
    elements.username.classList.remove("text-dark", "text-light");
    if (rank === (0, _permissionsJs.Rank).Admin) elements.username.classList.add("username-admin");
    if (rank === (0, _permissionsJs.Rank).Moderator) elements.username.classList.add("username-moderator");
    elements.staffbtns.style.display = "block";
    if (_perms.restore) elements.restoreBtn.style.display = "inline-block";
    if (_perms.reboot) elements.rebootBtn.style.display = "inline-block";
    if (_perms.bypassturn) {
        elements.bypassTurnBtn.style.display = "inline-block";
        elements.endTurnBtn.style.display = "inline-block";
        elements.clearQueueBtn.style.display = "inline-block";
    }
    if (_rank === (0, _permissionsJs.Rank).Admin) {
        elements.qemuMonitorBtn.style.display = "inline-block";
        elements.indefTurnBtn.style.display = "inline-block";
    }
    if (_perms.xss) elements.xssCheckboxContainer.style.display = "inline-block";
    if (_perms.forcevote) elements.forceVotePanel.style.display = "block";
    for (const user of users)userModOptions(user);
}
function userModOptions(user) {
    var tr = user.element;
    var td = tr.children[0];
    tr.classList.add("dropdown");
    td.classList.add("dropdown-toggle");
    td.setAttribute("data-bs-toggle", "dropdown");
    td.setAttribute("role", "button");
    td.setAttribute("aria-expanded", "false");
    var ul = document.createElement("ul");
    ul.classList.add("dropdown-menu", "dropdown-menu-dark", "table-dark", "text-light");
    if (perms.bypassturn) addUserDropdownItem(ul, "End Turn", ()=>VM.endTurn(user.user.username));
    if (perms.ban) addUserDropdownItem(ul, "Ban", ()=>VM.ban(user.user.username));
    if (perms.kick) addUserDropdownItem(ul, "Kick", ()=>VM.kick(user.user.username));
    if (perms.rename) addUserDropdownItem(ul, "Rename", ()=>{
        var newname = prompt(`Enter new username for ${user.user.username}`);
        if (!newname) return;
        VM.renameUser(user.user.username, newname);
    });
    if (perms.mute) {
        addUserDropdownItem(ul, "Temporary Mute", ()=>VM.mute(user.user.username, (0, _muteStateJsDefault.default).Temp));
        addUserDropdownItem(ul, "Indefinite Mute", ()=>VM.mute(user.user.username, (0, _muteStateJsDefault.default).Perma));
        addUserDropdownItem(ul, "Unmute", ()=>VM.mute(user.user.username, (0, _muteStateJsDefault.default).Unmuted));
    }
    if (perms.grabip) addUserDropdownItem(ul, "Get IP", async ()=>{
        var ip = await VM.getip(user.user.username);
        alert(ip);
    });
    tr.appendChild(ul);
}
function addUserDropdownItem(ul, text, func) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#";
    a.classList.add("dropdown-item");
    a.innerHTML = text;
    a.addEventListener("click", ()=>func());
    li.appendChild(a);
    ul.appendChild(li);
}
// Admin buttons
elements.restoreBtn.addEventListener("click", ()=>window.confirm("Are you sure you want to restore the VM?") && VM?.restore());
elements.rebootBtn.addEventListener("click", ()=>VM?.reboot());
elements.clearQueueBtn.addEventListener("click", ()=>VM?.clearQueue());
elements.bypassTurnBtn.addEventListener("click", ()=>VM?.bypassTurn());
elements.endTurnBtn.addEventListener("click", ()=>{
    var user = VM?.getUsers().find((u)=>u.turn === 0);
    if (user) VM?.endTurn(user.username);
});
elements.forceVoteNoBtn.addEventListener("click", ()=>VM?.forceVote(false));
elements.forceVoteYesBtn.addEventListener("click", ()=>VM?.forceVote(true));
elements.indefTurnBtn.addEventListener("click", ()=>VM?.indefiniteTurn());
async function sendQEMUCommand() {
    if (!elements.qemuMonitorInput.value) return;
    var cmd = elements.qemuMonitorInput.value;
    elements.qemuMonitorOutput.innerHTML += `&gt; ${cmd}\n`;
    elements.qemuMonitorInput.value = "";
    var response = await VM?.qemuMonitor(cmd);
    elements.qemuMonitorOutput.innerHTML += `${response}\n`;
    elements.qemuMonitorOutput.scrollTop = elements.qemuMonitorOutput.scrollHeight;
}
elements.qemuMonitorSendBtn.addEventListener("click", ()=>sendQEMUCommand());
elements.qemuMonitorInput.addEventListener("keypress", (e)=>e.key === "Enter" && sendQEMUCommand());
elements.osk.addEventListener("click", ()=>elements.oskContainer.classList.toggle("d-none"));
// Public API
w.collabvm = {
    openVM: openVM,
    closeVM: closeVM,
    loadList: loadList,
    multicollab: multicollab,
    getVM: ()=>VM
};
// Multicollab will stay in the global scope for backwards compatibility
w.multicollab = multicollab;
// Same goes for GetAdmin
w.GetAdmin = ()=>{
    if (VM === null) return;
    return {
        adminInstruction: (...args)=>{
            args.unshift("admin");
            VM?.send(...args);
        },
        restore: ()=>VM.restore(),
        reboot: ()=>VM.reboot(),
        clearQueue: ()=>VM.clearQueue(),
        bypassTurn: ()=>VM.bypassTurn(),
        endTurn: (username)=>VM.endTurn(username),
        ban: (username)=>VM.ban(username),
        kick: (username)=>VM.kick(username),
        renameUser: (oldname, newname)=>VM.renameUser(oldname, newname),
        mute: (username, state)=>VM.mute(username, state),
        getip: (username)=>VM.getip(username),
        qemuMonitor: (cmd)=>{
            VM?.qemuMonitor(cmd);
            return;
        },
        globalXss: (msg)=>VM.xss(msg),
        forceVote: (result)=>VM.forceVote(result)
    };
};
// more backwards compatibility
w.cvmEvents = {
    on: (event, cb)=>{
        if (VM === null) return;
        VM.on("message", (...args)=>cb(...args));
    }
};
w.VMName = null;
// Load all VMs
loadList();
// Welcome modal
var noWelcomeModal = window.localStorage.getItem("no-welcome-modal");
if (noWelcomeModal !== "1") {
    var welcomeModalDismissBtn = document.getElementById("welcomeModalDismiss");
    var welcomeModal = new _bootstrap.Modal(document.getElementById("welcomeModal"));
    welcomeModalDismissBtn.addEventListener("click", ()=>{
        window.localStorage.setItem("no-welcome-modal", "1");
    });
    welcomeModalDismissBtn.disabled = true;
    welcomeModal.show();
    setTimeout(()=>{
        welcomeModalDismissBtn.disabled = false;
    }, 5000);
}

},{"./protocol/CollabVMClient.js":"e3Fwd","../../Config.js":"brTdz","./protocol/Permissions.js":"eH3LD","simple-keyboard":"clcqq","./keyboard":"iZQBP","simple-keyboard/build/css/index.css":"kATyj","bootstrap":"i1HU5","./protocol/MuteState.js":"kdvz7","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"e3Fwd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nanoevents = require("nanoevents");
var _guacutilsJs = require("./Guacutils.js");
var _userJs = require("./User.js");
var _permissionsJs = require("./Permissions.js");
var _mouseJs = require("./mouse.js");
var _mouseJsDefault = parcelHelpers.interopDefault(_mouseJs);
var _keyboardJs = require("../keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
class CollabVMClient {
    constructor(url){
        this.connectedToVM = false;
        this.users = [];
        this.username = null;
        this.mouse = new (0, _mouseJsDefault.default)();
        this.rank = (0, _permissionsJs.Rank).Unregistered;
        this.perms = new (0, _permissionsJs.Permissions)(0);
        this.voteStatus = null;
        this.node = null;
        this.on = (event, cb)=>this.publicEmitter.on(event, cb);
        // Save the URL
        this.url = url;
        // Create the events
        this.emitter = (0, _nanoevents.createNanoEvents)();
        this.publicEmitter = (0, _nanoevents.createNanoEvents)();
        // Create the canvas
        this.canvas = document.createElement("canvas");
        // Set tab index so it can be focused
        this.canvas.tabIndex = -1;
        // Get the 2D context
        this.ctx = this.canvas.getContext("2d");
        // Bind canvas click
        this.canvas.addEventListener("click", (e)=>{
            if (this.users.find((u)=>u.username === this.username)?.turn === -1) this.turn(true);
        });
        // Bind keyboard and mouse
        this.canvas.addEventListener("mousedown", (e)=>{
            if (this.users.find((u)=>u.username === this.username)?.turn === -1 && this.rank !== (0, _permissionsJs.Rank).Admin) return;
            this.mouse.processEvent(e, true);
            this.sendmouse(this.mouse.x, this.mouse.y, this.mouse.makeMask());
        }, {
            capture: true
        });
        this.canvas.addEventListener("mouseup", (e)=>{
            if (this.users.find((u)=>u.username === this.username)?.turn === -1 && this.rank !== (0, _permissionsJs.Rank).Admin) return;
            this.mouse.processEvent(e, false);
            this.sendmouse(this.mouse.x, this.mouse.y, this.mouse.makeMask());
        }, {
            capture: true
        });
        this.canvas.addEventListener("mousemove", (e)=>{
            if (this.users.find((u)=>u.username === this.username)?.turn === -1 && this.rank !== (0, _permissionsJs.Rank).Admin) return;
            this.mouse.processEvent(e, null);
            this.sendmouse(this.mouse.x, this.mouse.y, this.mouse.makeMask());
        }, {
            capture: true
        });
        this.canvas.addEventListener("keydown", (e)=>{
            e.preventDefault();
            if (this.users.find((u)=>u.username === this.username)?.turn === -1 && this.rank !== (0, _permissionsJs.Rank).Admin) return;
            var keysym = (0, _keyboardJsDefault.default)(e.keyCode, e.key, e.location);
            if (keysym === null) return;
            this.key(keysym, true);
        }, {
            capture: true
        });
        this.canvas.addEventListener("keyup", (e)=>{
            e.preventDefault();
            if (this.users.find((u)=>u.username === this.username)?.turn === -1 && this.rank !== (0, _permissionsJs.Rank).Admin) return;
            var keysym = (0, _keyboardJsDefault.default)(e.keyCode, e.key, e.location);
            if (keysym === null) return;
            this.key(keysym, false);
        }, {
            capture: true
        });
        this.canvas.addEventListener("contextmenu", (e)=>e.preventDefault());
        // Create the WebSocket
        this.socket = new WebSocket(url, "guacamole");
        // Add the event listeners
        this.socket.addEventListener("open", ()=>this.onOpen());
        this.socket.addEventListener("message", (event)=>this.onMessage(event));
        this.socket.addEventListener("close", ()=>this.publicEmitter.emit("close"));
    }
    // Fires when the WebSocket connection is opened
    onOpen() {
        this.publicEmitter.emit("open");
    }
    // Fires on WebSocket message
    onMessage(event) {
        var msgArr;
        try {
            msgArr = _guacutilsJs.decode(event.data);
        } catch (e) {
            console.error(`Server sent invalid message (${e})`);
            return;
        }
        this.publicEmitter.emit("message", ...msgArr);
        switch(msgArr[0]){
            case "nop":
                // Send a NOP back
                this.send("nop");
                break;
            case "list":
                // pass msgarr to the emitter for processing by list()
                this.emitter.emit("list", msgArr.slice(1));
                break;
            case "connect":
                this.connectedToVM = msgArr[1] === "1";
                this.emitter.emit("connect", this.connectedToVM);
                break;
            case "size":
                if (msgArr[1] !== "0") return;
                this.canvas.width = parseInt(msgArr[2]);
                this.canvas.height = parseInt(msgArr[3]);
                break;
            case "png":
                // Despite the opcode name, this is actually JPEG, because old versions of the server used PNG and yknow backwards compatibility
                var img = new Image();
                img.addEventListener("load", ()=>{
                    this.ctx.drawImage(img, parseInt(msgArr[3]), parseInt(msgArr[4]));
                });
                img.src = "data:image/jpeg;base64," + msgArr[5];
                break;
            case "chat":
                for(var i = 1; i < msgArr.length; i += 2)this.publicEmitter.emit("chat", msgArr[i], msgArr[i + 1]);
                break;
            case "adduser":
                for(var i = 2; i < msgArr.length; i += 2){
                    var _user = this.users.find((u)=>u.username === msgArr[i]);
                    if (_user !== undefined) _user.rank = parseInt(msgArr[i + 1]);
                    else {
                        _user = new (0, _userJs.User)(msgArr[i], parseInt(msgArr[i + 1]));
                        this.users.push(_user);
                    }
                    this.publicEmitter.emit("adduser", _user);
                }
                break;
            case "remuser":
                for(var i = 2; i < msgArr.length; i++){
                    var _user = this.users.find((u)=>u.username === msgArr[i]);
                    if (_user === undefined) continue;
                    this.users.splice(this.users.indexOf(_user), 1);
                    this.publicEmitter.emit("remuser", _user);
                }
            case "rename":
                var selfrename = false;
                var oldusername = null;
                // We've been renamed
                if (msgArr[1] === "0") {
                    selfrename = true;
                    oldusername = this.username;
                    // msgArr[2] is the status of the rename
                    // Anything other than 0 is an error, however the server will still rename us to a guest name
                    switch(msgArr[2]){
                        case "1":
                            // The username we wanted was taken
                            this.publicEmitter.emit("renamestatus", "taken");
                            break;
                        case "2":
                            // The username we wanted was invalid
                            this.publicEmitter.emit("renamestatus", "invalid");
                            break;
                        case "3":
                            // The username we wanted is blacklisted
                            this.publicEmitter.emit("renamestatus", "blacklisted");
                            break;
                    }
                    this.username = msgArr[3];
                } else oldusername = msgArr[2];
                var _user = this.users.find((u)=>u.username === oldusername);
                if (_user) _user.username = msgArr[3];
                this.publicEmitter.emit("rename", oldusername, msgArr[3], selfrename);
                break;
            case "turn":
                // Reset all turn data
                for (var user of this.users)user.turn = -1;
                var queuedUsers = parseInt(msgArr[2]);
                if (queuedUsers === 0) {
                    this.publicEmitter.emit("turn", {
                        user: null,
                        queue: [],
                        turnTime: null,
                        queueTime: null
                    });
                    return;
                }
                var currentTurn = this.users.find((u)=>u.username === msgArr[3]);
                currentTurn.turn = 0;
                var queue = [];
                if (queuedUsers > 1) for(var i = 1; i < queuedUsers; i++){
                    var user = this.users.find((u)=>u.username === msgArr[i + 3]);
                    queue.push(user);
                    user.turn = i;
                }
                this.publicEmitter.emit("turn", {
                    user: currentTurn,
                    queue: queue,
                    turnTime: currentTurn.username === this.username ? parseInt(msgArr[1]) : null,
                    queueTime: queue.some((u)=>u.username === this.username) ? parseInt(msgArr[msgArr.length - 1]) : null
                });
                break;
            case "vote":
                switch(msgArr[1]){
                    case "0":
                    // Vote started
                    case "1":
                        // Vote updated
                        var timeToEnd = parseInt(msgArr[2]);
                        var yesVotes = parseInt(msgArr[3]);
                        var noVotes = parseInt(msgArr[4]);
                        // Some server implementations dont send data for status 0, and some do
                        if (Number.isNaN(timeToEnd) || Number.isNaN(yesVotes) || Number.isNaN(noVotes)) return;
                        this.voteStatus = {
                            timeToEnd: timeToEnd,
                            yesVotes: yesVotes,
                            noVotes: noVotes
                        };
                        this.publicEmitter.emit("vote", this.voteStatus);
                        break;
                    case "2":
                        // Vote ended
                        this.voteStatus = null;
                        this.publicEmitter.emit("voteend");
                        break;
                    case "3":
                        // Cooldown
                        this.publicEmitter.emit("votecd", parseInt(msgArr[2]));
                        break;
                }
            case "admin":
                switch(msgArr[1]){
                    case "0":
                        // Login
                        switch(msgArr[2]){
                            case "0":
                                this.publicEmitter.emit("badpw");
                                return;
                            case "1":
                                this.perms = new (0, _permissionsJs.Permissions)(65535);
                                this.rank = (0, _permissionsJs.Rank).Admin;
                                break;
                            case "3":
                                this.perms = new (0, _permissionsJs.Permissions)(parseInt(msgArr[3]));
                                this.rank = (0, _permissionsJs.Rank).Moderator;
                                break;
                        }
                        this.publicEmitter.emit("login", this.rank, this.perms);
                        break;
                    case "19":
                        // IP
                        this.emitter.emit("ip", msgArr[2], msgArr[3]);
                        break;
                    case "2":
                        // QEMU
                        this.emitter.emit("qemu", msgArr[2]);
                        break;
                }
        }
    }
    // Sends a message to the server
    send(...args) {
        this.socket.send(_guacutilsJs.encode(...args));
    }
    // Get a list of all VMs
    list() {
        return new Promise((res, rej)=>{
            var u = this.emitter.on("list", (list)=>{
                u();
                var vms = [];
                for(var i = 0; i < list.length; i += 3){
                    var th = new Image();
                    th.src = "data:image/jpeg;base64," + list[i + 2];
                    vms.push({
                        url: this.url,
                        id: list[i],
                        displayName: list[i + 1],
                        thumbnail: th
                    });
                }
                res(vms);
            });
            this.send("list");
        });
    }
    // Connect to a node
    connect(id, username = null) {
        return new Promise((res)=>{
            var u = this.emitter.on("connect", (success)=>{
                u();
                res(success);
            });
            if (username === null) this.send("rename");
            else this.send("rename", username);
            this.send("connect", id);
            this.node = id;
        });
    }
    // Close the connection
    close() {
        this.connectedToVM = false;
        if (this.socket.readyState === WebSocket.OPEN) this.socket.close();
    }
    // Get users
    getUsers() {
        // Return a copy of the array
        return this.users.slice();
    }
    // Send a chat message
    chat(message) {
        this.send("chat", message);
    }
    // Rename
    rename(username = null) {
        if (username) this.send("rename", username);
        else this.send("rename");
    }
    // Take or drop turn
    turn(taketurn) {
        this.send("turn", taketurn ? "1" : "0");
    }
    // Send mouse instruction
    sendmouse(x, y, mask) {
        this.send("mouse", x.toString(), y.toString(), mask.toString());
    }
    // Send key
    key(keysym, down) {
        this.send("key", keysym.toString(), down ? "1" : "0");
    }
    // Get vote status
    getVoteStatus() {
        return this.voteStatus;
    }
    // Start a vote, or vote
    vote(vote) {
        this.send("vote", vote ? "1" : "0");
    }
    // Try to login using the specified password
    login(password) {
        this.send("admin", "2", password);
    }
    /* Admin commands */ // Restore
    restore() {
        if (!this.node) return;
        this.send("admin", "8", this.node);
    }
    // Reboot
    reboot() {
        if (!this.node) return;
        this.send("admin", "10", this.node);
    }
    // Clear turn queue
    clearQueue() {
        if (!this.node) return;
        this.send("admin", "17", this.node);
    }
    // Bypass turn
    bypassTurn() {
        this.send("admin", "20");
    }
    // End turn
    endTurn(user) {
        this.send("admin", "16", user);
    }
    // Ban
    ban(user) {
        this.send("admin", "12", user);
    }
    // Kick
    kick(user) {
        this.send("admin", "15", user);
    }
    // Rename user
    renameUser(oldname, newname) {
        this.send("admin", "18", oldname, newname);
    }
    // Mute user
    mute(user, state) {
        this.send("admin", "14", user, state.toString());
    }
    // Grab IP
    getip(user) {
        if (this.users.find((u)=>u.username === user) === undefined) return false;
        return new Promise((res)=>{
            var u = this.emitter.on("ip", (username, ip)=>{
                if (username !== user) return;
                u();
                res(ip);
            });
            this.send("admin", "19", user);
        });
    }
    // QEMU Monitor
    qemuMonitor(cmd) {
        return new Promise((res)=>{
            var u = this.emitter.on("qemu", (output)=>{
                u();
                res(output);
            });
            this.send("admin", "5", this.node, cmd);
        });
    }
    // XSS
    xss(msg) {
        this.send("admin", "21", msg);
    }
    // Force vote
    forceVote(result) {
        this.send("admin", "13", result ? "1" : "0");
    }
    // Toggle turns
    turns(enabled) {
        this.send("admin", "22", enabled ? "1" : "0");
    }
    // Indefinite turn
    indefiniteTurn() {
        this.send("admin", "23");
    }
    // Hide screen
    hideScreen(hidden) {
        this.send("admin", "24", hidden ? "1" : "0");
    }
}
exports.default = CollabVMClient;

},{"nanoevents":"80Y6L","./Guacutils.js":"kxNd1","./User.js":"8Xuwu","./Permissions.js":"eH3LD","./mouse.js":"kSEnS","../keyboard.js":"iZQBP","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"80Y6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNanoEvents", ()=>createNanoEvents);
let createNanoEvents = ()=>({
        events: {},
        emit (event, ...args) {
            let callbacks = this.events[event] || [];
            for(let i = 0, length = callbacks.length; i < length; i++)callbacks[i](...args);
        },
        on (event, cb) {
            this.events[event]?.push(cb) || (this.events[event] = [
                cb
            ]);
            return ()=>{
                this.events[event] = this.events[event]?.filter((i)=>cb !== i);
            };
        }
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"fDCb9":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kxNd1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "encode", ()=>encode);
function decode(string) {
    let pos = -1;
    let sections = [];
    for(;;){
        let len = string.indexOf(".", pos + 1);
        if (len === -1) break;
        pos = parseInt(string.slice(pos + 1, len)) + len + 1;
        // don't allow funky protocol length
        if (pos > string.length) return [];
        sections.push(string.slice(len + 1, pos));
        const sep = string.slice(pos, pos + 1);
        if (sep === ",") continue;
        else if (sep === ";") break;
        else // Invalid data.
        return [];
    }
    return sections;
}
function encode(...string) {
    let command = "";
    for(var i = 0; i < string.length; i++){
        let current = string[i];
        command += current.toString().length + "." + current;
        command += i < string.length - 1 ? "," : ";";
    }
    return command;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"8Xuwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User);
var _permissionsJs = require("./Permissions.js");
class User {
    constructor(username, rank = (0, _permissionsJs.Rank).Unregistered){
        this.username = username;
        this.rank = rank;
        this.turn = -1;
    }
}

},{"./Permissions.js":"eH3LD","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"eH3LD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Permissions", ()=>Permissions);
parcelHelpers.export(exports, "Rank", ()=>Rank);
class Permissions {
    constructor(mask){
        this.restore = false;
        this.reboot = false;
        this.ban = false;
        this.forcevote = false;
        this.mute = false;
        this.kick = false;
        this.bypassturn = false;
        this.rename = false;
        this.grabip = false;
        this.xss = false;
        this.restore = (mask & 1) !== 0;
        this.reboot = (mask & 2) !== 0;
        this.ban = (mask & 4) !== 0;
        this.forcevote = (mask & 8) !== 0;
        this.mute = (mask & 16) !== 0;
        this.kick = (mask & 32) !== 0;
        this.bypassturn = (mask & 64) !== 0;
        this.rename = (mask & 128) !== 0;
        this.grabip = (mask & 256) !== 0;
        this.xss = (mask & 512) !== 0;
    }
}
var Rank;
(function(Rank) {
    Rank[Rank["Unregistered"] = 0] = "Unregistered";
    Rank[Rank["Admin"] = 2] = "Admin";
    Rank[Rank["Moderator"] = 3] = "Moderator";
})(Rank || (Rank = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kSEnS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Mouse {
    constructor(){
        this.left = false;
        this.middle = false;
        this.right = false;
        this.scrolldown = false;
        this.scrollup = false;
        this.x = 0;
        this.y = 0;
    }
    makeMask() {
        var mask = 0;
        if (this.left) mask |= 1;
        if (this.middle) mask |= 2;
        if (this.right) mask |= 4;
        if (this.scrollup) mask |= 8;
        if (this.scrolldown) mask |= 16;
        return mask;
    }
    processEvent(e, down = null) {
        if (down !== null) switch(e.button){
            case 0:
                this.left = down;
                break;
            case 1:
                this.middle = down;
                break;
            case 2:
                this.right = down;
                break;
        }
        this.x = e.offsetX;
        this.y = e.offsetY;
    }
}
exports.default = Mouse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"iZQBP":[function(require,module,exports) {
// Pulled a bunch of functions out of the guac source code to get a keysym
// and then a wrapper
// shitty but it works so /shrug
// THIS SUCKS SO BAD AND I HATE IT PLEASE REWRITE ALL OF THIS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>GetKeysym);
parcelHelpers.export(exports, "OSK_buttonToKeysym", ()=>OSK_buttonToKeysym);
function GetKeysym(keyCode, key, location) {
    let keysym = keysym_from_key_identifier(key, location) || keysym_from_keycode(keyCode, location);
    return keysym;
}
function keysym_from_key_identifier(identifier, location) {
    if (!identifier) return null;
    let typedCharacter;
    // If identifier is U+xxxx, decode Unicode character
    const unicodePrefixLocation = identifier.indexOf("U+");
    if (unicodePrefixLocation >= 0) {
        const hex = identifier.substring(unicodePrefixLocation + 2);
        typedCharacter = String.fromCharCode(parseInt(hex, 16));
    } else if (identifier.length === 1) typedCharacter = identifier;
    else return get_keysym(keyidentifier_keysym[identifier], location);
    if (!typedCharacter) return null;
    const codepoint = typedCharacter.charCodeAt(0);
    return keysym_from_charcode(codepoint);
}
function get_keysym(keysyms, location) {
    if (!keysyms) return null;
    return keysyms[location] || keysyms[0];
}
function keysym_from_charcode(codepoint) {
    if (isControlCharacter(codepoint)) return 0xff00 | codepoint;
    if (codepoint >= 0x0000 && codepoint <= 0x00ff) return codepoint;
    if (codepoint >= 0x0100 && codepoint <= 0x10ffff) return 0x01000000 | codepoint;
    return null;
}
function isControlCharacter(codepoint) {
    return codepoint <= 0x1f || codepoint >= 0x7f && codepoint <= 0x9f;
}
function keysym_from_keycode(keyCode, location) {
    return get_keysym(keycodeKeysyms[keyCode], location);
}
function key_identifier_sane(keyCode, keyIdentifier) {
    if (!keyIdentifier) return false;
    const unicodePrefixLocation = keyIdentifier.indexOf("U+");
    if (unicodePrefixLocation === -1) return true;
    const codepoint = parseInt(keyIdentifier.substring(unicodePrefixLocation + 2), 16);
    if (keyCode !== codepoint) return true;
    if (keyCode >= 65 && keyCode <= 90 || keyCode >= 48 && keyCode <= 57) return true;
    return false;
}
function OSK_buttonToKeysym(button) {
    const keyMapping = OSK_keyMappings.find((mapping)=>mapping.includes(button));
    if (keyMapping) {
        const [, keyCode, keyIdentifier, key, location] = keyMapping;
        return GetKeysym(keyCode, key, location);
    }
    return null;
}
var keycodeKeysyms = {
    8: [
        0xFF08
    ],
    9: [
        0xFF09
    ],
    12: [
        0xFF0B,
        0xFF0B,
        0xFF0B,
        0xFFB5
    ],
    13: [
        0xFF0D
    ],
    16: [
        0xFFE1,
        0xFFE1,
        0xFFE2
    ],
    17: [
        0xFFE3,
        0xFFE3,
        0xFFE4
    ],
    18: [
        0xFFE9,
        0xFFE9,
        0xFE03
    ],
    19: [
        0xFF13
    ],
    20: [
        0xFFE5
    ],
    27: [
        0xFF1B
    ],
    32: [
        0x0020
    ],
    33: [
        0xFF55,
        0xFF55,
        0xFF55,
        0xFFB9
    ],
    34: [
        0xFF56,
        0xFF56,
        0xFF56,
        0xFFB3
    ],
    35: [
        0xFF57,
        0xFF57,
        0xFF57,
        0xFFB1
    ],
    36: [
        0xFF50,
        0xFF50,
        0xFF50,
        0xFFB7
    ],
    37: [
        0xFF51,
        0xFF51,
        0xFF51,
        0xFFB4
    ],
    38: [
        0xFF52,
        0xFF52,
        0xFF52,
        0xFFB8
    ],
    39: [
        0xFF53,
        0xFF53,
        0xFF53,
        0xFFB6
    ],
    40: [
        0xFF54,
        0xFF54,
        0xFF54,
        0xFFB2
    ],
    45: [
        0xFF63,
        0xFF63,
        0xFF63,
        0xFFB0
    ],
    46: [
        0xFFFF,
        0xFFFF,
        0xFFFF,
        0xFFAE
    ],
    91: [
        0xFFEB
    ],
    92: [
        0xFF67
    ],
    93: null,
    96: [
        0xFFB0
    ],
    97: [
        0xFFB1
    ],
    98: [
        0xFFB2
    ],
    99: [
        0xFFB3
    ],
    100: [
        0xFFB4
    ],
    101: [
        0xFFB5
    ],
    102: [
        0xFFB6
    ],
    103: [
        0xFFB7
    ],
    104: [
        0xFFB8
    ],
    105: [
        0xFFB9
    ],
    106: [
        0xFFAA
    ],
    107: [
        0xFFAB
    ],
    109: [
        0xFFAD
    ],
    110: [
        0xFFAE
    ],
    111: [
        0xFFAF
    ],
    112: [
        0xFFBE
    ],
    113: [
        0xFFBF
    ],
    114: [
        0xFFC0
    ],
    115: [
        0xFFC1
    ],
    116: [
        0xFFC2
    ],
    117: [
        0xFFC3
    ],
    118: [
        0xFFC4
    ],
    119: [
        0xFFC5
    ],
    120: [
        0xFFC6
    ],
    121: [
        0xFFC7
    ],
    122: [
        0xFFC8
    ],
    123: [
        0xFFC9
    ],
    144: [
        0xFF7F
    ],
    145: [
        0xFF14
    ],
    225: [
        0xFE03
    ] // altgraph (iso_level3_shift)
};
var keyidentifier_keysym = {
    "Again": [
        0xFF66
    ],
    "AllCandidates": [
        0xFF3D
    ],
    "Alphanumeric": [
        0xFF30
    ],
    "Alt": [
        0xFFE9,
        0xFFE9,
        0xFE03
    ],
    "Attn": [
        0xFD0E
    ],
    "AltGraph": [
        0xFE03
    ],
    "ArrowDown": [
        0xFF54
    ],
    "ArrowLeft": [
        0xFF51
    ],
    "ArrowRight": [
        0xFF53
    ],
    "ArrowUp": [
        0xFF52
    ],
    "Backspace": [
        0xFF08
    ],
    "CapsLock": [
        0xFFE5
    ],
    "Cancel": [
        0xFF69
    ],
    "Clear": [
        0xFF0B
    ],
    "Convert": [
        0xFF21
    ],
    "Copy": [
        0xFD15
    ],
    "Crsel": [
        0xFD1C
    ],
    "CrSel": [
        0xFD1C
    ],
    "CodeInput": [
        0xFF37
    ],
    "Compose": [
        0xFF20
    ],
    "Control": [
        0xFFE3,
        0xFFE3,
        0xFFE4
    ],
    "ContextMenu": [
        0xFF67
    ],
    "DeadGrave": [
        0xFE50
    ],
    "DeadAcute": [
        0xFE51
    ],
    "DeadCircumflex": [
        0xFE52
    ],
    "DeadTilde": [
        0xFE53
    ],
    "DeadMacron": [
        0xFE54
    ],
    "DeadBreve": [
        0xFE55
    ],
    "DeadAboveDot": [
        0xFE56
    ],
    "DeadUmlaut": [
        0xFE57
    ],
    "DeadAboveRing": [
        0xFE58
    ],
    "DeadDoubleacute": [
        0xFE59
    ],
    "DeadCaron": [
        0xFE5A
    ],
    "DeadCedilla": [
        0xFE5B
    ],
    "DeadOgonek": [
        0xFE5C
    ],
    "DeadIota": [
        0xFE5D
    ],
    "DeadVoicedSound": [
        0xFE5E
    ],
    "DeadSemivoicedSound": [
        0xFE5F
    ],
    "Delete": [
        0xFFFF
    ],
    "Down": [
        0xFF54
    ],
    "End": [
        0xFF57
    ],
    "Enter": [
        0xFF0D
    ],
    "EraseEof": [
        0xFD06
    ],
    "Escape": [
        0xFF1B
    ],
    "Execute": [
        0xFF62
    ],
    "Exsel": [
        0xFD1D
    ],
    "ExSel": [
        0xFD1D
    ],
    "F1": [
        0xFFBE
    ],
    "F2": [
        0xFFBF
    ],
    "F3": [
        0xFFC0
    ],
    "F4": [
        0xFFC1
    ],
    "F5": [
        0xFFC2
    ],
    "F6": [
        0xFFC3
    ],
    "F7": [
        0xFFC4
    ],
    "F8": [
        0xFFC5
    ],
    "F9": [
        0xFFC6
    ],
    "F10": [
        0xFFC7
    ],
    "F11": [
        0xFFC8
    ],
    "F12": [
        0xFFC9
    ],
    "F13": [
        0xFFCA
    ],
    "F14": [
        0xFFCB
    ],
    "F15": [
        0xFFCC
    ],
    "F16": [
        0xFFCD
    ],
    "F17": [
        0xFFCE
    ],
    "F18": [
        0xFFCF
    ],
    "F19": [
        0xFFD0
    ],
    "F20": [
        0xFFD1
    ],
    "F21": [
        0xFFD2
    ],
    "F22": [
        0xFFD3
    ],
    "F23": [
        0xFFD4
    ],
    "F24": [
        0xFFD5
    ],
    "Find": [
        0xFF68
    ],
    "GroupFirst": [
        0xFE0C
    ],
    "GroupLast": [
        0xFE0E
    ],
    "GroupNext": [
        0xFE08
    ],
    "GroupPrevious": [
        0xFE0A
    ],
    "FullWidth": null,
    "HalfWidth": null,
    "HangulMode": [
        0xFF31
    ],
    "Hankaku": [
        0xFF29
    ],
    "HanjaMode": [
        0xFF34
    ],
    "Help": [
        0xFF6A
    ],
    "Hiragana": [
        0xFF25
    ],
    "HiraganaKatakana": [
        0xFF27
    ],
    "Home": [
        0xFF50
    ],
    "Hyper": [
        0xFFED,
        0xFFED,
        0xFFEE
    ],
    "Insert": [
        0xFF63
    ],
    "JapaneseHiragana": [
        0xFF25
    ],
    "JapaneseKatakana": [
        0xFF26
    ],
    "JapaneseRomaji": [
        0xFF24
    ],
    "JunjaMode": [
        0xFF38
    ],
    "KanaMode": [
        0xFF2D
    ],
    "KanjiMode": [
        0xFF21
    ],
    "Katakana": [
        0xFF26
    ],
    "Left": [
        0xFF51
    ],
    "Meta": [
        0xFFE7,
        0xFFE7,
        0xFFE8
    ],
    "ModeChange": [
        0xFF7E
    ],
    "NumLock": [
        0xFF7F
    ],
    "PageDown": [
        0xFF56
    ],
    "PageUp": [
        0xFF55
    ],
    "Pause": [
        0xFF13
    ],
    "Play": [
        0xFD16
    ],
    "PreviousCandidate": [
        0xFF3E
    ],
    "PrintScreen": [
        0xFD1D
    ],
    "Redo": [
        0xFF66
    ],
    "Right": [
        0xFF53
    ],
    "RomanCharacters": null,
    "Scroll": [
        0xFF14
    ],
    "Select": [
        0xFF60
    ],
    "Separator": [
        0xFFAC
    ],
    "Shift": [
        0xFFE1,
        0xFFE1,
        0xFFE2
    ],
    "SingleCandidate": [
        0xFF3C
    ],
    "Super": [
        0xFFEB,
        0xFFEB,
        0xFFEC
    ],
    "Tab": [
        0xFF09
    ],
    "Up": [
        0xFF52
    ],
    "Undo": [
        0xFF65
    ],
    "Win": [
        0xFFEB
    ],
    "Zenkaku": [
        0xFF28
    ],
    "ZenkakuHankaku": [
        0xFF2A
    ]
};
const OSK_keyMappings = [
    [
        "!",
        49,
        "Digit1",
        "!",
        0
    ],
    [
        "#",
        51,
        "Digit3",
        "#",
        0
    ],
    [
        "$",
        52,
        "Digit4",
        "$",
        0
    ],
    [
        "%",
        53,
        "Digit5",
        "%",
        0
    ],
    [
        "&",
        55,
        "Digit7",
        "&",
        0
    ],
    [
        "'",
        222,
        "Quote",
        "'",
        0
    ],
    [
        "(",
        57,
        "Digit9",
        "(",
        0
    ],
    [
        ")",
        48,
        "Digit0",
        ")",
        0
    ],
    [
        "*",
        56,
        "Digit8",
        "*",
        0
    ],
    [
        "+",
        187,
        "Equal",
        "+",
        0
    ],
    [
        ",",
        188,
        "Comma",
        ",",
        0
    ],
    [
        "-",
        189,
        "Minus",
        "-",
        0
    ],
    [
        ".",
        190,
        "Period",
        ".",
        0
    ],
    [
        "/",
        191,
        "Slash",
        "/",
        0
    ],
    [
        "0",
        48,
        "Digit0",
        "0",
        0
    ],
    [
        "1",
        49,
        "Digit1",
        "1",
        0
    ],
    [
        "2",
        50,
        "Digit2",
        "2",
        0
    ],
    [
        "3",
        51,
        "Digit3",
        "3",
        0
    ],
    [
        "4",
        52,
        "Digit4",
        "4",
        0
    ],
    [
        "5",
        53,
        "Digit5",
        "5",
        0
    ],
    [
        "6",
        54,
        "Digit6",
        "6",
        0
    ],
    [
        "7",
        55,
        "Digit7",
        "7",
        0
    ],
    [
        "8",
        56,
        "Digit8",
        "8",
        0
    ],
    [
        "9",
        57,
        "Digit9",
        "9",
        0
    ],
    [
        ":",
        186,
        "Semicolon",
        ":",
        0
    ],
    [
        ";",
        186,
        "Semicolon",
        ";",
        0
    ],
    [
        "<",
        188,
        "Comma",
        "<",
        0
    ],
    [
        "=",
        187,
        "Equal",
        "=",
        0
    ],
    [
        ">",
        190,
        "Period",
        ">",
        0
    ],
    [
        "?",
        191,
        "Slash",
        "?",
        0
    ],
    [
        "@",
        50,
        "Digit2",
        "@",
        0
    ],
    [
        "A",
        65,
        "KeyA",
        "A",
        0
    ],
    [
        "B",
        66,
        "KeyB",
        "B",
        0
    ],
    [
        "C",
        67,
        "KeyC",
        "C",
        0
    ],
    [
        "D",
        68,
        "KeyD",
        "D",
        0
    ],
    [
        "E",
        69,
        "KeyE",
        "E",
        0
    ],
    [
        "F",
        70,
        "KeyF",
        "F",
        0
    ],
    [
        "G",
        71,
        "KeyG",
        "G",
        0
    ],
    [
        "H",
        72,
        "KeyH",
        "H",
        0
    ],
    [
        "I",
        73,
        "KeyI",
        "I",
        0
    ],
    [
        "J",
        74,
        "KeyJ",
        "J",
        0
    ],
    [
        "K",
        75,
        "KeyK",
        "K",
        0
    ],
    [
        "L",
        76,
        "KeyL",
        "L",
        0
    ],
    [
        "M",
        77,
        "KeyM",
        "M",
        0
    ],
    [
        "N",
        78,
        "KeyN",
        "N",
        0
    ],
    [
        "O",
        79,
        "KeyO",
        "O",
        0
    ],
    [
        "P",
        80,
        "KeyP",
        "P",
        0
    ],
    [
        "Q",
        81,
        "KeyQ",
        "Q",
        0
    ],
    [
        "R",
        82,
        "KeyR",
        "R",
        0
    ],
    [
        "S",
        83,
        "KeyS",
        "S",
        0
    ],
    [
        "T",
        84,
        "KeyT",
        "T",
        0
    ],
    [
        "U",
        85,
        "KeyU",
        "U",
        0
    ],
    [
        "V",
        86,
        "KeyV",
        "V",
        0
    ],
    [
        "W",
        87,
        "KeyW",
        "W",
        0
    ],
    [
        "X",
        88,
        "KeyX",
        "X",
        0
    ],
    [
        "Y",
        89,
        "KeyY",
        "Y",
        0
    ],
    [
        "Z",
        90,
        "KeyZ",
        "Z",
        0
    ],
    [
        "[",
        219,
        "BracketLeft",
        "[",
        0
    ],
    [
        "\\",
        220,
        "Backslash",
        "\\",
        0
    ],
    [
        "]",
        221,
        "BracketRight",
        "]",
        0
    ],
    [
        "^",
        54,
        "Digit6",
        "^",
        0
    ],
    [
        "_",
        189,
        "Minus",
        "_",
        0
    ],
    [
        "`",
        192,
        "Backquote",
        "`",
        0
    ],
    [
        "a",
        65,
        "KeyA",
        "a",
        0
    ],
    [
        "b",
        66,
        "KeyB",
        "b",
        0
    ],
    [
        "c",
        67,
        "KeyC",
        "c",
        0
    ],
    [
        "d",
        68,
        "KeyD",
        "d",
        0
    ],
    [
        "e",
        69,
        "KeyE",
        "e",
        0
    ],
    [
        "f",
        70,
        "KeyF",
        "f",
        0
    ],
    [
        "g",
        71,
        "KeyG",
        "g",
        0
    ],
    [
        "h",
        72,
        "KeyH",
        "h",
        0
    ],
    [
        "i",
        73,
        "KeyI",
        "i",
        0
    ],
    [
        "j",
        74,
        "KeyJ",
        "j",
        0
    ],
    [
        "k",
        75,
        "KeyK",
        "k",
        0
    ],
    [
        "l",
        76,
        "KeyL",
        "l",
        0
    ],
    [
        "m",
        77,
        "KeyM",
        "m",
        0
    ],
    [
        "n",
        78,
        "KeyN",
        "n",
        0
    ],
    [
        "o",
        79,
        "KeyO",
        "o",
        0
    ],
    [
        "p",
        80,
        "KeyP",
        "p",
        0
    ],
    [
        "q",
        81,
        "KeyQ",
        "q",
        0
    ],
    [
        "r",
        82,
        "KeyR",
        "r",
        0
    ],
    [
        "s",
        83,
        "KeyS",
        "s",
        0
    ],
    [
        "t",
        84,
        "KeyT",
        "t",
        0
    ],
    [
        "u",
        85,
        "KeyU",
        "u",
        0
    ],
    [
        "v",
        86,
        "KeyV",
        "v",
        0
    ],
    [
        "w",
        87,
        "KeyW",
        "w",
        0
    ],
    [
        "x",
        88,
        "KeyX",
        "x",
        0
    ],
    [
        "y",
        89,
        "KeyY",
        "y",
        0
    ],
    [
        "z",
        90,
        "KeyZ",
        "z",
        0
    ],
    [
        "{",
        219,
        "BracketLeft",
        "{",
        0
    ],
    [
        "{altleft}",
        18,
        "AltLeft",
        "AltLeft",
        1
    ],
    [
        "{altright}",
        18,
        "AltRight",
        "AltRight",
        2
    ],
    [
        "{arrowdown}",
        40,
        "ArrowDown",
        "ArrowDown",
        0
    ],
    [
        "{arrowleft}",
        37,
        "ArrowLeft",
        "ArrowLeft",
        0
    ],
    [
        "{arrowright}",
        39,
        "ArrowRight",
        "ArrowRight",
        0
    ],
    [
        "{arrowup}",
        38,
        "ArrowUp",
        "ArrowUp",
        0
    ],
    [
        "{backspace}",
        8,
        "Backspace",
        "Backspace",
        0
    ],
    [
        "{capslock}",
        20,
        "CapsLock",
        "CapsLock",
        0
    ],
    [
        "{controlleft}",
        17,
        "ControlLeft",
        "ControlLeft",
        1
    ],
    [
        "{controlright}",
        17,
        "ControlRight",
        "ControlRight",
        2
    ],
    [
        "{delete}",
        46,
        "Delete",
        "Delete",
        0
    ],
    [
        "{end}",
        35,
        "End",
        "End",
        0
    ],
    [
        "{enter}",
        13,
        "Enter",
        "Enter",
        0
    ],
    [
        "{escape}",
        27,
        "Escape",
        "Escape",
        0
    ],
    [
        "{f10}",
        121,
        "F10",
        "F10",
        0
    ],
    [
        "{f11}",
        122,
        "F11",
        "F11",
        0
    ],
    [
        "{f12}",
        123,
        "F12",
        "F12",
        0
    ],
    [
        "{f1}",
        112,
        "F1",
        "F1",
        0
    ],
    [
        "{f2}",
        113,
        "F2",
        "F2",
        0
    ],
    [
        "{f3}",
        114,
        "F3",
        "F3",
        0
    ],
    [
        "{f4}",
        115,
        "F4",
        "F4",
        0
    ],
    [
        "{f5}",
        116,
        "F5",
        "F5",
        0
    ],
    [
        "{f6}",
        117,
        "F6",
        "F6",
        0
    ],
    [
        "{f7}",
        118,
        "F7",
        "F7",
        0
    ],
    [
        "{f8}",
        119,
        "F8",
        "F8",
        0
    ],
    [
        "{f9}",
        120,
        "F9",
        "F9",
        0
    ],
    [
        "{home}",
        36,
        "Home",
        "Home",
        0
    ],
    [
        "{insert}",
        45,
        "Insert",
        "Insert",
        0
    ],
    [
        "{metaleft}",
        91,
        "OSLeft",
        "OSLeft",
        1
    ],
    [
        "{metaright}",
        92,
        "OSRight",
        "OSRight",
        2
    ],
    [
        "{numlock}",
        144,
        "NumLock",
        "NumLock",
        0
    ],
    [
        "{numpad0}",
        96,
        "Numpad0",
        "Numpad0",
        3
    ],
    [
        "{numpad1}",
        97,
        "Numpad1",
        "Numpad1",
        3
    ],
    [
        "{numpad2}",
        98,
        "Numpad2",
        "Numpad2",
        3
    ],
    [
        "{numpad3}",
        99,
        "Numpad3",
        "Numpad3",
        3
    ],
    [
        "{numpad4}",
        100,
        "Numpad4",
        "Numpad4",
        3
    ],
    [
        "{numpad5}",
        101,
        "Numpad5",
        "Numpad5",
        3
    ],
    [
        "{numpad6}",
        102,
        "Numpad6",
        "Numpad6",
        3
    ],
    [
        "{numpad7}",
        103,
        "Numpad7",
        "Numpad7",
        3
    ],
    [
        "{numpad8}",
        104,
        "Numpad8",
        "Numpad8",
        3
    ],
    [
        "{numpad9}",
        105,
        "Numpad9",
        "Numpad9",
        3
    ],
    [
        "{numpadadd}",
        107,
        "NumpadAdd",
        "NumpadAdd",
        3
    ],
    [
        "{numpaddecimal}",
        110,
        "NumpadDecimal",
        "NumpadDecimal",
        3
    ],
    [
        "{numpaddivide}",
        111,
        "NumpadDivide",
        "NumpadDivide",
        3
    ],
    [
        "{numpadenter}",
        13,
        "NumpadEnter",
        "NumpadEnter",
        3
    ],
    [
        "{numpadmultiply}",
        106,
        "NumpadMultiply",
        "NumpadMultiply",
        3
    ],
    [
        "{numpadsubtract}",
        109,
        "NumpadSubtract",
        "NumpadSubtract",
        3
    ],
    [
        "{pagedown}",
        34,
        "PageDown",
        "PageDown",
        0
    ],
    [
        "{pageup}",
        33,
        "PageUp",
        "PageUp",
        0
    ],
    [
        "{pause}",
        19,
        "Pause",
        "Pause",
        0
    ],
    [
        "{prtscr}",
        44,
        "PrintScreen",
        "PrintScreen",
        0
    ],
    [
        "{scrolllock}",
        145,
        "ScrollLock",
        "ScrollLock",
        0
    ],
    [
        "{shiftleft}",
        16,
        "ShiftLeft",
        "ShiftLeft",
        1
    ],
    [
        "{shiftright}",
        16,
        "ShiftRight",
        "ShiftRight",
        2
    ],
    [
        "{space}",
        32,
        "Space",
        "Space",
        0
    ],
    [
        "{tab}",
        9,
        "Tab",
        "Tab",
        0
    ],
    [
        "|",
        220,
        "Backslash",
        "|",
        0
    ],
    [
        "}",
        221,
        "BracketRight",
        "}",
        0
    ],
    [
        "~",
        192,
        "Backquote",
        "~",
        0
    ],
    [
        '"',
        222,
        "Quote",
        '"',
        0
    ]
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"brTdz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>Config);
const Config = {
    ChatSound: "//computernewb.com/collab-vm/notify.ogg",
    ServerAddresses: [
        "wss://ef98b067ef81634e53fd30181bb8795f.serveo.net"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"clcqq":[function(require,module,exports) {
/*!
 * 
 *   simple-keyboard v3.7.66
 *   https://github.com/hodgef/simple-keyboard
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */ !function(t, e) {
    module.exports = e();
}(this, function() {
    return function() {
        "use strict";
        var t = {
            9306: function(t, e, n) {
                var o = n(4901), r = n(6823), i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw new i(r(t) + " is not a function");
                };
            },
            5548: function(t, e, n) {
                var o = n(3517), r = n(6823), i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw new i(r(t) + " is not a constructor");
                };
            },
            3506: function(t, e, n) {
                var o = n(3925), r = String, i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw new i("Can't set " + r(t) + " as a prototype");
                };
            },
            6469: function(t, e, n) {
                var o = n(8227), r = n(2360), i = n(4913).f, a = o("unscopables"), s = Array.prototype;
                void 0 === s[a] && i(s, a, {
                    configurable: !0,
                    value: r(null)
                }), t.exports = function(t) {
                    s[a][t] = !0;
                };
            },
            7829: function(t, e, n) {
                var o = n(8183).charAt;
                t.exports = function(t, e, n) {
                    return e + (n ? o(t, e).length : 1);
                };
            },
            8551: function(t, e, n) {
                var o = n(34), r = String, i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw new i(r(t) + " is not an object");
                };
            },
            235: function(t, e, n) {
                var o = n(9213).forEach, r = n(4598)("forEach");
                t.exports = r ? [].forEach : function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                };
            },
            7916: function(t, e, n) {
                var o = n(6080), r = n(9565), i = n(8981), a = n(6319), s = n(4209), u = n(3517), c = n(6198), l = n(4659), f = n(81), d = n(851), p = Array;
                t.exports = function(t) {
                    var e = i(t), n = u(this), h = arguments.length, v = h > 1 ? arguments[1] : void 0, y = void 0 !== v;
                    y && (v = o(v, h > 2 ? arguments[2] : void 0));
                    var g, m, b, x, w, E, O = d(e), S = 0;
                    if (!O || this === p && s(O)) for(g = c(e), m = n ? new this(g) : p(g); g > S; S++)E = y ? v(e[S], S) : e[S], l(m, S, E);
                    else for(w = (x = f(e, O)).next, m = n ? new this : []; !(b = r(w, x)).done; S++)E = y ? a(x, v, [
                        b.value,
                        S
                    ], !0) : b.value, l(m, S, E);
                    return m.length = S, m;
                };
            },
            9617: function(t, e, n) {
                var o = n(5397), r = n(5610), i = n(6198), a = function(t) {
                    return function(e, n, a) {
                        var s = o(e), u = i(s);
                        if (0 === u) return !t && -1;
                        var c, l = r(a, u);
                        if (t && n != n) {
                            for(; u > l;)if ((c = s[l++]) != c) return !0;
                        } else for(; u > l; l++)if ((t || l in s) && s[l] === n) return t || l || 0;
                        return !t && -1;
                    };
                };
                t.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                };
            },
            9213: function(t, e, n) {
                var o = n(6080), r = n(9504), i = n(7055), a = n(8981), s = n(6198), u = n(1469), c = r([].push), l = function(t) {
                    var e = 1 === t, n = 2 === t, r = 3 === t, l = 4 === t, f = 6 === t, d = 7 === t, p = 5 === t || f;
                    return function(h, v, y, g) {
                        for(var m, b, x = a(h), w = i(x), E = s(w), O = o(v, y), S = 0, k = g || u, P = e ? k(h, E) : n || d ? k(h, 0) : void 0; E > S; S++)if ((p || S in w) && (b = O(m = w[S], S, x), t)) {
                            if (e) P[S] = b;
                            else if (b) switch(t){
                                case 3:
                                    return !0;
                                case 5:
                                    return m;
                                case 6:
                                    return S;
                                case 2:
                                    c(P, m);
                            }
                            else switch(t){
                                case 4:
                                    return !1;
                                case 7:
                                    c(P, m);
                            }
                        }
                        return f ? -1 : r || l ? l : P;
                    };
                };
                t.exports = {
                    forEach: l(0),
                    map: l(1),
                    filter: l(2),
                    some: l(3),
                    every: l(4),
                    find: l(5),
                    findIndex: l(6),
                    filterReject: l(7)
                };
            },
            597: function(t, e, n) {
                var o = n(9039), r = n(8227), i = n(7388), a = r("species");
                t.exports = function(t) {
                    return i >= 51 || !o(function() {
                        var e = [];
                        return (e.constructor = {})[a] = function() {
                            return {
                                foo: 1
                            };
                        }, 1 !== e[t](Boolean).foo;
                    });
                };
            },
            4598: function(t, e, n) {
                var o = n(9039);
                t.exports = function(t, e) {
                    var n = [][t];
                    return !!n && o(function() {
                        n.call(null, e || function() {
                            return 1;
                        }, 1);
                    });
                };
            },
            926: function(t, e, n) {
                var o = n(9306), r = n(8981), i = n(7055), a = n(6198), s = TypeError, u = "Reduce of empty array with no initial value", c = function(t) {
                    return function(e, n, c, l) {
                        var f = r(e), d = i(f), p = a(f);
                        if (o(n), 0 === p && c < 2) throw new s(u);
                        var h = t ? p - 1 : 0, v = t ? -1 : 1;
                        if (c < 2) for(;;){
                            if (h in d) {
                                l = d[h], h += v;
                                break;
                            }
                            if (h += v, t ? h < 0 : p <= h) throw new s(u);
                        }
                        for(; t ? h >= 0 : p > h; h += v)h in d && (l = n(l, d[h], h, f));
                        return l;
                    };
                };
                t.exports = {
                    left: c(!1),
                    right: c(!0)
                };
            },
            4527: function(t, e, n) {
                var o = n(3724), r = n(4376), i = TypeError, a = Object.getOwnPropertyDescriptor, s = o && !function() {
                    if (void 0 !== this) return !0;
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).length = 1;
                    } catch (t) {
                        return t instanceof TypeError;
                    }
                }();
                t.exports = s ? function(t, e) {
                    if (r(t) && !a(t, "length").writable) throw new i("Cannot set read only .length");
                    return t.length = e;
                } : function(t, e) {
                    return t.length = e;
                };
            },
            7680: function(t, e, n) {
                var o = n(9504);
                t.exports = o([].slice);
            },
            4488: function(t, e, n) {
                var o = n(7680), r = Math.floor, i = function(t, e) {
                    var n = t.length;
                    if (n < 8) for(var a, s, u = 1; u < n;){
                        for(s = u, a = t[u]; s && e(t[s - 1], a) > 0;)t[s] = t[--s];
                        s !== u++ && (t[s] = a);
                    }
                    else for(var c = r(n / 2), l = i(o(t, 0, c), e), f = i(o(t, c), e), d = l.length, p = f.length, h = 0, v = 0; h < d || v < p;)t[h + v] = h < d && v < p ? e(l[h], f[v]) <= 0 ? l[h++] : f[v++] : h < d ? l[h++] : f[v++];
                    return t;
                };
                t.exports = i;
            },
            7433: function(t, e, n) {
                var o = n(4376), r = n(3517), i = n(34), a = n(8227)("species"), s = Array;
                t.exports = function(t) {
                    var e;
                    return o(t) && (e = t.constructor, (r(e) && (e === s || o(e.prototype)) || i(e) && null === (e = e[a])) && (e = void 0)), void 0 === e ? s : e;
                };
            },
            1469: function(t, e, n) {
                var o = n(7433);
                t.exports = function(t, e) {
                    return new (o(t))(0 === e ? 0 : e);
                };
            },
            6319: function(t, e, n) {
                var o = n(8551), r = n(9539);
                t.exports = function(t, e, n, i) {
                    try {
                        return i ? e(o(n)[0], n[1]) : e(n);
                    } catch (e) {
                        r(t, "throw", e);
                    }
                };
            },
            4428: function(t, e, n) {
                var o = n(8227)("iterator"), r = !1;
                try {
                    var i = 0, a = {
                        next: function() {
                            return {
                                done: !!i++
                            };
                        },
                        return: function() {
                            r = !0;
                        }
                    };
                    a[o] = function() {
                        return this;
                    }, Array.from(a, function() {
                        throw 2;
                    });
                } catch (t) {}
                t.exports = function(t, e) {
                    try {
                        if (!e && !r) return !1;
                    } catch (t) {
                        return !1;
                    }
                    var n = !1;
                    try {
                        var i = {};
                        i[o] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: n = !0
                                    };
                                }
                            };
                        }, t(i);
                    } catch (t) {}
                    return n;
                };
            },
            4576: function(t, e, n) {
                var o = n(9504), r = o({}.toString), i = o("".slice);
                t.exports = function(t) {
                    return i(r(t), 8, -1);
                };
            },
            6955: function(t, e, n) {
                var o = n(2140), r = n(4901), i = n(4576), a = n(8227)("toStringTag"), s = Object, u = "Arguments" === i(function() {
                    return arguments;
                }());
                t.exports = o ? i : function(t) {
                    var e, n, o;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                        try {
                            return t[e];
                        } catch (t) {}
                    }(e = s(t), a)) ? n : u ? i(e) : "Object" === (o = i(e)) && r(e.callee) ? "Arguments" : o;
                };
            },
            7740: function(t, e, n) {
                var o = n(9297), r = n(5031), i = n(7347), a = n(4913);
                t.exports = function(t, e, n) {
                    for(var s = r(e), u = a.f, c = i.f, l = 0; l < s.length; l++){
                        var f = s[l];
                        o(t, f) || n && o(n, f) || u(t, f, c(e, f));
                    }
                };
            },
            1436: function(t, e, n) {
                var o = n(8227)("match");
                t.exports = function(t) {
                    var e = /./;
                    try {
                        "/./"[t](e);
                    } catch (n) {
                        try {
                            return e[o] = !1, "/./"[t](e);
                        } catch (t) {}
                    }
                    return !1;
                };
            },
            2211: function(t, e, n) {
                var o = n(9039);
                t.exports = !o(function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype;
                });
            },
            2529: function(t) {
                t.exports = function(t, e) {
                    return {
                        value: t,
                        done: e
                    };
                };
            },
            6699: function(t, e, n) {
                var o = n(3724), r = n(4913), i = n(6980);
                t.exports = o ? function(t, e, n) {
                    return r.f(t, e, i(1, n));
                } : function(t, e, n) {
                    return t[e] = n, t;
                };
            },
            6980: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    };
                };
            },
            4659: function(t, e, n) {
                var o = n(3724), r = n(4913), i = n(6980);
                t.exports = function(t, e, n) {
                    o ? r.f(t, e, i(0, n)) : t[e] = n;
                };
            },
            3640: function(t, e, n) {
                var o = n(8551), r = n(4270), i = TypeError;
                t.exports = function(t) {
                    if (o(this), "string" === t || "default" === t) t = "string";
                    else if ("number" !== t) throw new i("Incorrect hint");
                    return r(this, t);
                };
            },
            2106: function(t, e, n) {
                var o = n(283), r = n(4913);
                t.exports = function(t, e, n) {
                    return n.get && o(n.get, e, {
                        getter: !0
                    }), n.set && o(n.set, e, {
                        setter: !0
                    }), r.f(t, e, n);
                };
            },
            6840: function(t, e, n) {
                var o = n(4901), r = n(4913), i = n(283), a = n(9433);
                t.exports = function(t, e, n, s) {
                    s || (s = {});
                    var u = s.enumerable, c = void 0 !== s.name ? s.name : e;
                    if (o(n) && i(n, c, s), s.global) u ? t[e] = n : a(e, n);
                    else {
                        try {
                            s.unsafe ? t[e] && (u = !0) : delete t[e];
                        } catch (t) {}
                        u ? t[e] = n : r.f(t, e, {
                            value: n,
                            enumerable: !1,
                            configurable: !s.nonConfigurable,
                            writable: !s.nonWritable
                        });
                    }
                    return t;
                };
            },
            9433: function(t, e, n) {
                var o = n(4475), r = Object.defineProperty;
                t.exports = function(t, e) {
                    try {
                        r(o, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        });
                    } catch (n) {
                        o[t] = e;
                    }
                    return e;
                };
            },
            4606: function(t, e, n) {
                var o = n(6823), r = TypeError;
                t.exports = function(t, e) {
                    if (!delete t[e]) throw new r("Cannot delete property " + o(e) + " of " + o(t));
                };
            },
            3724: function(t, e, n) {
                var o = n(9039);
                t.exports = !o(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7;
                        }
                    })[1];
                });
            },
            4055: function(t, e, n) {
                var o = n(4475), r = n(34), i = o.document, a = r(i) && r(i.createElement);
                t.exports = function(t) {
                    return a ? i.createElement(t) : {};
                };
            },
            6837: function(t) {
                var e = TypeError;
                t.exports = function(t) {
                    if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
                    return t;
                };
            },
            7400: function(t) {
                t.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                };
            },
            9296: function(t, e, n) {
                var o = n(4055)("span").classList, r = o && o.constructor && o.constructor.prototype;
                t.exports = r === Object.prototype ? void 0 : r;
            },
            8834: function(t, e, n) {
                var o = n(9392).match(/firefox\/(\d+)/i);
                t.exports = !!o && +o[1];
            },
            3202: function(t, e, n) {
                var o = n(9392);
                t.exports = /MSIE|Trident/.test(o);
            },
            9088: function(t, e, n) {
                var o = n(4475), r = n(4576);
                t.exports = "process" === r(o.process);
            },
            9392: function(t) {
                t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
            },
            7388: function(t, e, n) {
                var o, r, i = n(4475), a = n(9392), s = i.process, u = i.Deno, c = s && s.versions || u && u.version, l = c && c.v8;
                l && (r = (o = l.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !r && a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = +o[1]), t.exports = r;
            },
            9160: function(t, e, n) {
                var o = n(9392).match(/AppleWebKit\/(\d+)\./);
                t.exports = !!o && +o[1];
            },
            8727: function(t) {
                t.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf"
                ];
            },
            6518: function(t, e, n) {
                var o = n(4475), r = n(7347).f, i = n(6699), a = n(6840), s = n(9433), u = n(7740), c = n(2796);
                t.exports = function(t, e) {
                    var n, l, f, d, p, h = t.target, v = t.global, y = t.stat;
                    if (n = v ? o : y ? o[h] || s(h, {}) : o[h] && o[h].prototype) for(l in e){
                        if (d = e[l], f = t.dontCallGetSet ? (p = r(n, l)) && p.value : n[l], !c(v ? l : h + (y ? "." : "#") + l, t.forced) && void 0 !== f) {
                            if (typeof d == typeof f) continue;
                            u(d, f);
                        }
                        (t.sham || f && f.sham) && i(d, "sham", !0), a(n, l, d, t);
                    }
                };
            },
            9039: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t();
                    } catch (t) {
                        return !0;
                    }
                };
            },
            9228: function(t, e, n) {
                n(7495);
                var o = n(9565), r = n(6840), i = n(7323), a = n(9039), s = n(8227), u = n(6699), c = s("species"), l = RegExp.prototype;
                t.exports = function(t, e, n, f) {
                    var d = s(t), p = !a(function() {
                        var e = {};
                        return e[d] = function() {
                            return 7;
                        }, 7 !== ""[t](e);
                    }), h = p && !a(function() {
                        var e = !1, n = /a/;
                        return "split" === t && ((n = {}).constructor = {}, n.constructor[c] = function() {
                            return n;
                        }, n.flags = "", n[d] = /./[d]), n.exec = function() {
                            return e = !0, null;
                        }, n[d](""), !e;
                    });
                    if (!p || !h || n) {
                        var v = /./[d], y = e(d, ""[t], function(t, e, n, r, a) {
                            var s = e.exec;
                            return s === i || s === l.exec ? p && !a ? {
                                done: !0,
                                value: o(v, e, n, r)
                            } : {
                                done: !0,
                                value: o(t, n, e, r)
                            } : {
                                done: !1
                            };
                        });
                        r(String.prototype, t, y[0]), r(l, d, y[1]);
                    }
                    f && u(l[d], "sham", !0);
                };
            },
            8745: function(t, e, n) {
                var o = n(616), r = Function.prototype, i = r.apply, a = r.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (o ? a.bind(i) : function() {
                    return a.apply(i, arguments);
                });
            },
            6080: function(t, e, n) {
                var o = n(7476), r = n(9306), i = n(616), a = o(o.bind);
                t.exports = function(t, e) {
                    return r(t), void 0 === e ? t : i ? a(t, e) : function() {
                        return t.apply(e, arguments);
                    };
                };
            },
            616: function(t, e, n) {
                var o = n(9039);
                t.exports = !o(function() {
                    var t = (function() {}).bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype");
                });
            },
            9565: function(t, e, n) {
                var o = n(616), r = Function.prototype.call;
                t.exports = o ? r.bind(r) : function() {
                    return r.apply(r, arguments);
                };
            },
            350: function(t, e, n) {
                var o = n(3724), r = n(9297), i = Function.prototype, a = o && Object.getOwnPropertyDescriptor, s = r(i, "name"), u = s && "something" === (function() {}).name, c = s && (!o || o && a(i, "name").configurable);
                t.exports = {
                    EXISTS: s,
                    PROPER: u,
                    CONFIGURABLE: c
                };
            },
            6706: function(t, e, n) {
                var o = n(9504), r = n(9306);
                t.exports = function(t, e, n) {
                    try {
                        return o(r(Object.getOwnPropertyDescriptor(t, e)[n]));
                    } catch (t) {}
                };
            },
            7476: function(t, e, n) {
                var o = n(4576), r = n(9504);
                t.exports = function(t) {
                    if ("Function" === o(t)) return r(t);
                };
            },
            9504: function(t, e, n) {
                var o = n(616), r = Function.prototype, i = r.call, a = o && r.bind.bind(i, i);
                t.exports = o ? a : function(t) {
                    return function() {
                        return i.apply(t, arguments);
                    };
                };
            },
            7751: function(t, e, n) {
                var o = n(4475), r = n(4901);
                t.exports = function(t, e) {
                    var n;
                    return arguments.length < 2 ? (n = o[t], r(n) ? n : void 0) : o[t] && o[t][e];
                };
            },
            851: function(t, e, n) {
                var o = n(6955), r = n(5966), i = n(4117), a = n(6269), s = n(8227)("iterator");
                t.exports = function(t) {
                    if (!i(t)) return r(t, s) || r(t, "@@iterator") || a[o(t)];
                };
            },
            81: function(t, e, n) {
                var o = n(9565), r = n(9306), i = n(8551), a = n(6823), s = n(851), u = TypeError;
                t.exports = function(t, e) {
                    var n = arguments.length < 2 ? s(t) : e;
                    if (r(n)) return i(o(n, t));
                    throw new u(a(t) + " is not iterable");
                };
            },
            6933: function(t, e, n) {
                var o = n(9504), r = n(4376), i = n(4901), a = n(4576), s = n(655), u = o([].push);
                t.exports = function(t) {
                    if (i(t)) return t;
                    if (r(t)) {
                        for(var e = t.length, n = [], o = 0; o < e; o++){
                            var c = t[o];
                            "string" == typeof c ? u(n, c) : "number" != typeof c && "Number" !== a(c) && "String" !== a(c) || u(n, s(c));
                        }
                        var l = n.length, f = !0;
                        return function(t, e) {
                            if (f) return f = !1, e;
                            if (r(this)) return e;
                            for(var o = 0; o < l; o++)if (n[o] === t) return e;
                        };
                    }
                };
            },
            5966: function(t, e, n) {
                var o = n(9306), r = n(4117);
                t.exports = function(t, e) {
                    var n = t[e];
                    return r(n) ? void 0 : o(n);
                };
            },
            2478: function(t, e, n) {
                var o = n(9504), r = n(8981), i = Math.floor, a = o("".charAt), s = o("".replace), u = o("".slice), c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, l = /\$([$&'`]|\d{1,2})/g;
                t.exports = function(t, e, n, o, f, d) {
                    var p = n + t.length, h = o.length, v = l;
                    return void 0 !== f && (f = r(f), v = c), s(d, v, function(r, s) {
                        var c;
                        switch(a(s, 0)){
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return u(e, 0, n);
                            case "'":
                                return u(e, p);
                            case "<":
                                c = f[u(s, 1, -1)];
                                break;
                            default:
                                var l = +s;
                                if (0 === l) return r;
                                if (l > h) {
                                    var d = i(l / 10);
                                    return 0 === d ? r : d <= h ? void 0 === o[d - 1] ? a(s, 1) : o[d - 1] + a(s, 1) : r;
                                }
                                c = o[l - 1];
                        }
                        return void 0 === c ? "" : c;
                    });
                };
            },
            4475: function(t, e, n) {
                var o = function(t) {
                    return t && t.Math === Math && t;
                };
                t.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n.g && n.g) || o("object" == typeof this && this) || function() {
                    return this;
                }() || Function("return this")();
            },
            9297: function(t, e, n) {
                var o = n(9504), r = n(8981), i = o({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return i(r(t), e);
                };
            },
            421: function(t) {
                t.exports = {};
            },
            397: function(t, e, n) {
                var o = n(7751);
                t.exports = o("document", "documentElement");
            },
            5917: function(t, e, n) {
                var o = n(3724), r = n(9039), i = n(4055);
                t.exports = !o && !r(function() {
                    return 7 !== Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7;
                        }
                    }).a;
                });
            },
            7055: function(t, e, n) {
                var o = n(9504), r = n(9039), i = n(4576), a = Object, s = o("".split);
                t.exports = r(function() {
                    return !a("z").propertyIsEnumerable(0);
                }) ? function(t) {
                    return "String" === i(t) ? s(t, "") : a(t);
                } : a;
            },
            3167: function(t, e, n) {
                var o = n(4901), r = n(34), i = n(2967);
                t.exports = function(t, e, n) {
                    var a, s;
                    return i && o(a = e.constructor) && a !== n && r(s = a.prototype) && s !== n.prototype && i(t, s), t;
                };
            },
            3706: function(t, e, n) {
                var o = n(9504), r = n(4901), i = n(7629), a = o(Function.toString);
                r(i.inspectSource) || (i.inspectSource = function(t) {
                    return a(t);
                }), t.exports = i.inspectSource;
            },
            1181: function(t, e, n) {
                var o, r, i, a = n(8622), s = n(4475), u = n(34), c = n(6699), l = n(9297), f = n(7629), d = n(6119), p = n(421), h = "Object already initialized", v = s.TypeError, y = s.WeakMap;
                if (a || f.state) {
                    var g = f.state || (f.state = new y);
                    g.get = g.get, g.has = g.has, g.set = g.set, o = function(t, e) {
                        if (g.has(t)) throw new v(h);
                        return e.facade = t, g.set(t, e), e;
                    }, r = function(t) {
                        return g.get(t) || {};
                    }, i = function(t) {
                        return g.has(t);
                    };
                } else {
                    var m = d("state");
                    p[m] = !0, o = function(t, e) {
                        if (l(t, m)) throw new v(h);
                        return e.facade = t, c(t, m, e), e;
                    }, r = function(t) {
                        return l(t, m) ? t[m] : {};
                    }, i = function(t) {
                        return l(t, m);
                    };
                }
                t.exports = {
                    set: o,
                    get: r,
                    has: i,
                    enforce: function(t) {
                        return i(t) ? r(t) : o(t, {});
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var n;
                            if (!u(e) || (n = r(e)).type !== t) throw new v("Incompatible receiver, " + t + " required");
                            return n;
                        };
                    }
                };
            },
            4209: function(t, e, n) {
                var o = n(8227), r = n(6269), i = o("iterator"), a = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (r.Array === t || a[i] === t);
                };
            },
            4376: function(t, e, n) {
                var o = n(4576);
                t.exports = Array.isArray || function(t) {
                    return "Array" === o(t);
                };
            },
            4901: function(t) {
                var e = "object" == typeof document && document.all;
                t.exports = void 0 === e && void 0 !== e ? function(t) {
                    return "function" == typeof t || t === e;
                } : function(t) {
                    return "function" == typeof t;
                };
            },
            3517: function(t, e, n) {
                var o = n(9504), r = n(9039), i = n(4901), a = n(6955), s = n(7751), u = n(3706), c = function() {}, l = s("Reflect", "construct"), f = /^\s*(?:class|function)\b/, d = o(f.exec), p = !f.test(c), h = function(t) {
                    if (!i(t)) return !1;
                    try {
                        return l(c, [], t), !0;
                    } catch (t) {
                        return !1;
                    }
                }, v = function(t) {
                    if (!i(t)) return !1;
                    switch(a(t)){
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return p || !!d(f, u(t));
                    } catch (t) {
                        return !0;
                    }
                };
                v.sham = !0, t.exports = !l || r(function() {
                    var t;
                    return h(h.call) || !h(Object) || !h(function() {
                        t = !0;
                    }) || t;
                }) ? v : h;
            },
            2796: function(t, e, n) {
                var o = n(9039), r = n(4901), i = /#|\.prototype\./, a = function(t, e) {
                    var n = u[s(t)];
                    return n === l || n !== c && (r(e) ? o(e) : !!e);
                }, s = a.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase();
                }, u = a.data = {}, c = a.NATIVE = "N", l = a.POLYFILL = "P";
                t.exports = a;
            },
            2087: function(t, e, n) {
                var o = n(34), r = Math.floor;
                t.exports = Number.isInteger || function(t) {
                    return !o(t) && isFinite(t) && r(t) === t;
                };
            },
            4117: function(t) {
                t.exports = function(t) {
                    return null == t;
                };
            },
            34: function(t, e, n) {
                var o = n(4901);
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : o(t);
                };
            },
            3925: function(t, e, n) {
                var o = n(34);
                t.exports = function(t) {
                    return o(t) || null === t;
                };
            },
            6395: function(t) {
                t.exports = !1;
            },
            788: function(t, e, n) {
                var o = n(34), r = n(4576), i = n(8227)("match");
                t.exports = function(t) {
                    var e;
                    return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" === r(t));
                };
            },
            757: function(t, e, n) {
                var o = n(7751), r = n(4901), i = n(1625), a = n(7040), s = Object;
                t.exports = a ? function(t) {
                    return "symbol" == typeof t;
                } : function(t) {
                    var e = o("Symbol");
                    return r(e) && i(e.prototype, s(t));
                };
            },
            9539: function(t, e, n) {
                var o = n(9565), r = n(8551), i = n(5966);
                t.exports = function(t, e, n) {
                    var a, s;
                    r(t);
                    try {
                        if (!(a = i(t, "return"))) {
                            if ("throw" === e) throw n;
                            return n;
                        }
                        a = o(a, t);
                    } catch (t) {
                        s = !0, a = t;
                    }
                    if ("throw" === e) throw n;
                    if (s) throw a;
                    return r(a), n;
                };
            },
            3994: function(t, e, n) {
                var o = n(7657).IteratorPrototype, r = n(2360), i = n(6980), a = n(687), s = n(6269), u = function() {
                    return this;
                };
                t.exports = function(t, e, n, c) {
                    var l = e + " Iterator";
                    return t.prototype = r(o, {
                        next: i(+!c, n)
                    }), a(t, l, !1, !0), s[l] = u, t;
                };
            },
            1088: function(t, e, n) {
                var o = n(6518), r = n(9565), i = n(6395), a = n(350), s = n(4901), u = n(3994), c = n(2787), l = n(2967), f = n(687), d = n(6699), p = n(6840), h = n(8227), v = n(6269), y = n(7657), g = a.PROPER, m = a.CONFIGURABLE, b = y.IteratorPrototype, x = y.BUGGY_SAFARI_ITERATORS, w = h("iterator"), E = "keys", O = "values", S = "entries", k = function() {
                    return this;
                };
                t.exports = function(t, e, n, a, h, y, P) {
                    u(n, e, a);
                    var I, C, A, M = function(t) {
                        if (t === h && R) return R;
                        if (!x && t && t in j) return j[t];
                        switch(t){
                            case E:
                            case O:
                            case S:
                                return function() {
                                    return new n(this, t);
                                };
                        }
                        return function() {
                            return new n(this);
                        };
                    }, T = e + " Iterator", D = !1, j = t.prototype, N = j[w] || j["@@iterator"] || h && j[h], R = !x && N || M(h), L = "Array" === e && j.entries || N;
                    if (L && (I = c(L.call(new t))) !== Object.prototype && I.next && (i || c(I) === b || (l ? l(I, b) : s(I[w]) || p(I, w, k)), f(I, T, !0, !0), i && (v[T] = k)), g && h === O && N && N.name !== O && (!i && m ? d(j, "name", O) : (D = !0, R = function() {
                        return r(N, this);
                    })), h) {
                        if (C = {
                            values: M(O),
                            keys: y ? R : M(E),
                            entries: M(S)
                        }, P) for(A in C)(x || D || !(A in j)) && p(j, A, C[A]);
                        else o({
                            target: e,
                            proto: !0,
                            forced: x || D
                        }, C);
                    }
                    return i && !P || j[w] === R || p(j, w, R, {
                        name: h
                    }), v[e] = R, C;
                };
            },
            7657: function(t, e, n) {
                var o, r, i, a = n(9039), s = n(4901), u = n(34), c = n(2360), l = n(2787), f = n(6840), d = n(8227), p = n(6395), h = d("iterator"), v = !1;
                [].keys && ("next" in (i = [].keys()) ? (r = l(l(i))) !== Object.prototype && (o = r) : v = !0), !u(o) || a(function() {
                    var t = {};
                    return o[h].call(t) !== t;
                }) ? o = {} : p && (o = c(o)), s(o[h]) || f(o, h, function() {
                    return this;
                }), t.exports = {
                    IteratorPrototype: o,
                    BUGGY_SAFARI_ITERATORS: v
                };
            },
            6269: function(t) {
                t.exports = {};
            },
            6198: function(t, e, n) {
                var o = n(8014);
                t.exports = function(t) {
                    return o(t.length);
                };
            },
            283: function(t, e, n) {
                var o = n(9504), r = n(9039), i = n(4901), a = n(9297), s = n(3724), u = n(350).CONFIGURABLE, c = n(3706), l = n(1181), f = l.enforce, d = l.get, p = String, h = Object.defineProperty, v = o("".slice), y = o("".replace), g = o([].join), m = s && !r(function() {
                    return 8 !== h(function() {}, "length", {
                        value: 8
                    }).length;
                }), b = String(String).split("String"), x = t.exports = function(t, e, n) {
                    "Symbol(" === v(p(e), 0, 7) && (e = "[" + y(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!a(t, "name") || u && t.name !== e) && (s ? h(t, "name", {
                        value: e,
                        configurable: !0
                    }) : t.name = e), m && n && a(n, "arity") && t.length !== n.arity && h(t, "length", {
                        value: n.arity
                    });
                    try {
                        n && a(n, "constructor") && n.constructor ? s && h(t, "prototype", {
                            writable: !1
                        }) : t.prototype && (t.prototype = void 0);
                    } catch (t) {}
                    var o = f(t);
                    return a(o, "source") || (o.source = g(b, "string" == typeof e ? e : "")), t;
                };
                Function.prototype.toString = x(function() {
                    return i(this) && d(this).source || c(this);
                }, "toString");
            },
            741: function(t) {
                var e = Math.ceil, n = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var o = +t;
                    return (o > 0 ? n : e)(o);
                };
            },
            5749: function(t, e, n) {
                var o = n(788), r = TypeError;
                t.exports = function(t) {
                    if (o(t)) throw new r("The method doesn't accept regular expressions");
                    return t;
                };
            },
            4213: function(t, e, n) {
                var o = n(3724), r = n(9504), i = n(9565), a = n(9039), s = n(1072), u = n(3717), c = n(8773), l = n(8981), f = n(7055), d = Object.assign, p = Object.defineProperty, h = r([].concat);
                t.exports = !d || a(function() {
                    if (o && 1 !== d({
                        b: 1
                    }, d(p({}, "a", {
                        enumerable: !0,
                        get: function() {
                            p(this, "b", {
                                value: 3,
                                enumerable: !1
                            });
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                    var t = {}, e = {}, n = Symbol("assign detection"), r = "abcdefghijklmnopqrst";
                    return t[n] = 7, r.split("").forEach(function(t) {
                        e[t] = t;
                    }), 7 !== d({}, t)[n] || s(d({}, e)).join("") !== r;
                }) ? function(t, e) {
                    for(var n = l(t), r = arguments.length, a = 1, d = u.f, p = c.f; r > a;)for(var v, y = f(arguments[a++]), g = d ? h(s(y), d(y)) : s(y), m = g.length, b = 0; m > b;)v = g[b++], o && !i(p, y, v) || (n[v] = y[v]);
                    return n;
                } : d;
            },
            2360: function(t, e, n) {
                var o, r = n(8551), i = n(6801), a = n(8727), s = n(421), u = n(397), c = n(4055), l = n(6119), f = "prototype", d = "script", p = l("IE_PROTO"), h = function() {}, v = function(t) {
                    return "<" + d + ">" + t + "</" + d + ">";
                }, y = function(t) {
                    t.write(v("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e;
                }, g = function() {
                    try {
                        o = new ActiveXObject("htmlfile");
                    } catch (t) {}
                    var t, e, n;
                    g = "undefined" != typeof document ? document.domain && o ? y(o) : (e = c("iframe"), n = "java" + d + ":", e.style.display = "none", u.appendChild(e), e.src = String(n), (t = e.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F) : y(o);
                    for(var r = a.length; r--;)delete g[f][a[r]];
                    return g();
                };
                s[p] = !0, t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (h[f] = r(t), n = new h, h[f] = null, n[p] = t) : n = g(), void 0 === e ? n : i.f(n, e);
                };
            },
            6801: function(t, e, n) {
                var o = n(3724), r = n(8686), i = n(4913), a = n(8551), s = n(5397), u = n(1072);
                e.f = o && !r ? Object.defineProperties : function(t, e) {
                    a(t);
                    for(var n, o = s(e), r = u(e), c = r.length, l = 0; c > l;)i.f(t, n = r[l++], o[n]);
                    return t;
                };
            },
            4913: function(t, e, n) {
                var o = n(3724), r = n(5917), i = n(8686), a = n(8551), s = n(6969), u = TypeError, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, f = "enumerable", d = "configurable", p = "writable";
                e.f = o ? i ? function(t, e, n) {
                    if (a(t), e = s(e), a(n), "function" == typeof t && "prototype" === e && "value" in n && p in n && !n[p]) {
                        var o = l(t, e);
                        o && o[p] && (t[e] = n.value, n = {
                            configurable: d in n ? n[d] : o[d],
                            enumerable: f in n ? n[f] : o[f],
                            writable: !1
                        });
                    }
                    return c(t, e, n);
                } : c : function(t, e, n) {
                    if (a(t), e = s(e), a(n), r) try {
                        return c(t, e, n);
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw new u("Accessors not supported");
                    return "value" in n && (t[e] = n.value), t;
                };
            },
            7347: function(t, e, n) {
                var o = n(3724), r = n(9565), i = n(8773), a = n(6980), s = n(5397), u = n(6969), c = n(9297), l = n(5917), f = Object.getOwnPropertyDescriptor;
                e.f = o ? f : function(t, e) {
                    if (t = s(t), e = u(e), l) try {
                        return f(t, e);
                    } catch (t) {}
                    if (c(t, e)) return a(!r(i.f, t, e), t[e]);
                };
            },
            298: function(t, e, n) {
                var o = n(4576), r = n(5397), i = n(8480).f, a = n(7680), s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t.exports.f = function(t) {
                    return s && "Window" === o(t) ? function(t) {
                        try {
                            return i(t);
                        } catch (t) {
                            return a(s);
                        }
                    }(t) : i(r(t));
                };
            },
            8480: function(t, e, n) {
                var o = n(1828), r = n(8727).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return o(t, r);
                };
            },
            3717: function(t, e) {
                e.f = Object.getOwnPropertySymbols;
            },
            2787: function(t, e, n) {
                var o = n(9297), r = n(4901), i = n(8981), a = n(6119), s = n(2211), u = a("IE_PROTO"), c = Object, l = c.prototype;
                t.exports = s ? c.getPrototypeOf : function(t) {
                    var e = i(t);
                    if (o(e, u)) return e[u];
                    var n = e.constructor;
                    return r(n) && e instanceof n ? n.prototype : e instanceof c ? l : null;
                };
            },
            1625: function(t, e, n) {
                var o = n(9504);
                t.exports = o({}.isPrototypeOf);
            },
            1828: function(t, e, n) {
                var o = n(9504), r = n(9297), i = n(5397), a = n(9617).indexOf, s = n(421), u = o([].push);
                t.exports = function(t, e) {
                    var n, o = i(t), c = 0, l = [];
                    for(n in o)!r(s, n) && r(o, n) && u(l, n);
                    for(; e.length > c;)r(o, n = e[c++]) && (~a(l, n) || u(l, n));
                    return l;
                };
            },
            1072: function(t, e, n) {
                var o = n(1828), r = n(8727);
                t.exports = Object.keys || function(t) {
                    return o(t, r);
                };
            },
            8773: function(t, e) {
                var n = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, r = o && !n.call({
                    1: 2
                }, 1);
                e.f = r ? function(t) {
                    var e = o(this, t);
                    return !!e && e.enumerable;
                } : n;
            },
            2551: function(t, e, n) {
                var o = n(6395), r = n(4475), i = n(9039), a = n(9160);
                t.exports = o || !i(function() {
                    if (!(a && a < 535)) {
                        var t = Math.random();
                        __defineSetter__.call(null, t, function() {}), delete r[t];
                    }
                });
            },
            2967: function(t, e, n) {
                var o = n(6706), r = n(8551), i = n(3506);
                t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var t, e = !1, n = {};
                    try {
                        (t = o(Object.prototype, "__proto__", "set"))(n, []), e = n instanceof Array;
                    } catch (t) {}
                    return function(n, o) {
                        return r(n), i(o), e ? t(n, o) : n.__proto__ = o, n;
                    };
                }() : void 0);
            },
            3179: function(t, e, n) {
                var o = n(2140), r = n(6955);
                t.exports = o ? ({}).toString : function() {
                    return "[object " + r(this) + "]";
                };
            },
            4270: function(t, e, n) {
                var o = n(9565), r = n(4901), i = n(34), a = TypeError;
                t.exports = function(t, e) {
                    var n, s;
                    if ("string" === e && r(n = t.toString) && !i(s = o(n, t))) return s;
                    if (r(n = t.valueOf) && !i(s = o(n, t))) return s;
                    if ("string" !== e && r(n = t.toString) && !i(s = o(n, t))) return s;
                    throw new a("Can't convert object to primitive value");
                };
            },
            5031: function(t, e, n) {
                var o = n(7751), r = n(9504), i = n(8480), a = n(3717), s = n(8551), u = r([].concat);
                t.exports = o("Reflect", "ownKeys") || function(t) {
                    var e = i.f(s(t)), n = a.f;
                    return n ? u(e, n(t)) : e;
                };
            },
            9167: function(t, e, n) {
                var o = n(4475);
                t.exports = o;
            },
            1056: function(t, e, n) {
                var o = n(4913).f;
                t.exports = function(t, e, n) {
                    n in t || o(t, n, {
                        configurable: !0,
                        get: function() {
                            return e[n];
                        },
                        set: function(t) {
                            e[n] = t;
                        }
                    });
                };
            },
            6682: function(t, e, n) {
                var o = n(9565), r = n(8551), i = n(4901), a = n(4576), s = n(7323), u = TypeError;
                t.exports = function(t, e) {
                    var n = t.exec;
                    if (i(n)) {
                        var c = o(n, t, e);
                        return null !== c && r(c), c;
                    }
                    if ("RegExp" === a(t)) return o(s, t, e);
                    throw new u("RegExp#exec called on incompatible receiver");
                };
            },
            7323: function(t, e, n) {
                var o, r, i = n(9565), a = n(9504), s = n(655), u = n(7979), c = n(8429), l = n(5745), f = n(2360), d = n(1181).get, p = n(3635), h = n(8814), v = l("native-string-replace", String.prototype.replace), y = RegExp.prototype.exec, g = y, m = a("".charAt), b = a("".indexOf), x = a("".replace), w = a("".slice), E = (r = /b*/g, i(y, o = /a/, "a"), i(y, r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex), O = c.BROKEN_CARET, S = void 0 !== /()??/.exec("")[1];
                (E || S || O || p || h) && (g = function(t) {
                    var e, n, o, r, a, c, l, p = this, h = d(p), k = s(t), P = h.raw;
                    if (P) return P.lastIndex = p.lastIndex, e = i(g, P, k), p.lastIndex = P.lastIndex, e;
                    var I = h.groups, C = O && p.sticky, A = i(u, p), M = p.source, T = 0, D = k;
                    if (C && (A = x(A, "y", ""), -1 === b(A, "g") && (A += "g"), D = w(k, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== m(k, p.lastIndex - 1)) && (M = "(?: " + M + ")", D = " " + D, T++), n = new RegExp("^(?:" + M + ")", A)), S && (n = new RegExp("^" + M + "$(?!\\s)", A)), E && (o = p.lastIndex), r = i(y, C ? n : p, D), C ? r ? (r.input = w(r.input, T), r[0] = w(r[0], T), r.index = p.lastIndex, p.lastIndex += r[0].length) : p.lastIndex = 0 : E && r && (p.lastIndex = p.global ? r.index + r[0].length : o), S && r && r.length > 1 && i(v, r[0], n, function() {
                        for(a = 1; a < arguments.length - 2; a++)void 0 === arguments[a] && (r[a] = void 0);
                    }), r && I) for(r.groups = c = f(null), a = 0; a < I.length; a++)c[(l = I[a])[0]] = r[l[1]];
                    return r;
                }), t.exports = g;
            },
            7979: function(t, e, n) {
                var o = n(8551);
                t.exports = function() {
                    var t = o(this), e = "";
                    return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
                };
            },
            1034: function(t, e, n) {
                var o = n(9565), r = n(9297), i = n(1625), a = n(7979), s = RegExp.prototype;
                t.exports = function(t) {
                    var e = t.flags;
                    return void 0 !== e || "flags" in s || r(t, "flags") || !i(s, t) ? e : o(a, t);
                };
            },
            8429: function(t, e, n) {
                var o = n(9039), r = n(4475).RegExp, i = o(function() {
                    var t = r("a", "y");
                    return t.lastIndex = 2, null !== t.exec("abcd");
                }), a = i || o(function() {
                    return !r("a", "y").sticky;
                }), s = i || o(function() {
                    var t = r("^r", "gy");
                    return t.lastIndex = 2, null !== t.exec("str");
                });
                t.exports = {
                    BROKEN_CARET: s,
                    MISSED_STICKY: a,
                    UNSUPPORTED_Y: i
                };
            },
            3635: function(t, e, n) {
                var o = n(9039), r = n(4475).RegExp;
                t.exports = o(function() {
                    var t = r(".", "s");
                    return !(t.dotAll && t.test("\n") && "s" === t.flags);
                });
            },
            8814: function(t, e, n) {
                var o = n(9039), r = n(4475).RegExp;
                t.exports = o(function() {
                    var t = r("(?<a>b)", "g");
                    return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
                });
            },
            7750: function(t, e, n) {
                var o = n(4117), r = TypeError;
                t.exports = function(t) {
                    if (o(t)) throw new r("Can't call method on " + t);
                    return t;
                };
            },
            7633: function(t, e, n) {
                var o = n(7751), r = n(2106), i = n(8227), a = n(3724), s = i("species");
                t.exports = function(t) {
                    var e = o(t);
                    a && e && !e[s] && r(e, s, {
                        configurable: !0,
                        get: function() {
                            return this;
                        }
                    });
                };
            },
            687: function(t, e, n) {
                var o = n(4913).f, r = n(9297), i = n(8227)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !n && (t = t.prototype), t && !r(t, i) && o(t, i, {
                        configurable: !0,
                        value: e
                    });
                };
            },
            6119: function(t, e, n) {
                var o = n(5745), r = n(3392), i = o("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = r(t));
                };
            },
            7629: function(t, e, n) {
                var o = n(6395), r = n(4475), i = n(9433), a = "__core-js_shared__", s = t.exports = r[a] || i(a, {});
                (s.versions || (s.versions = [])).push({
                    version: "3.36.0",
                    mode: o ? "pure" : "global",
                    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                });
            },
            5745: function(t, e, n) {
                var o = n(7629);
                t.exports = function(t, e) {
                    return o[t] || (o[t] = e || {});
                };
            },
            2293: function(t, e, n) {
                var o = n(8551), r = n(5548), i = n(4117), a = n(8227)("species");
                t.exports = function(t, e) {
                    var n, s = o(t).constructor;
                    return void 0 === s || i(n = o(s)[a]) ? e : r(n);
                };
            },
            8183: function(t, e, n) {
                var o = n(9504), r = n(1291), i = n(655), a = n(7750), s = o("".charAt), u = o("".charCodeAt), c = o("".slice), l = function(t) {
                    return function(e, n) {
                        var o, l, f = i(a(e)), d = r(n), p = f.length;
                        return d < 0 || d >= p ? t ? "" : void 0 : (o = u(f, d)) < 55296 || o > 56319 || d + 1 === p || (l = u(f, d + 1)) < 56320 || l > 57343 ? t ? s(f, d) : o : t ? c(f, d, d + 2) : l - 56320 + (o - 55296 << 10) + 65536;
                    };
                };
                t.exports = {
                    codeAt: l(!1),
                    charAt: l(!0)
                };
            },
            706: function(t, e, n) {
                var o = n(350).PROPER, r = n(9039), i = n(7452);
                t.exports = function(t) {
                    return r(function() {
                        return !!i[t]() || "\u200B\x85\u180E" !== "\u200B\x85\u180E"[t]() || o && i[t].name !== t;
                    });
                };
            },
            3802: function(t, e, n) {
                var o = n(9504), r = n(7750), i = n(655), a = n(7452), s = o("".replace), u = RegExp("^[" + a + "]+"), c = RegExp("(^|[^" + a + "])[" + a + "]+$"), l = function(t) {
                    return function(e) {
                        var n = i(r(e));
                        return 1 & t && (n = s(n, u, "")), 2 & t && (n = s(n, c, "$1")), n;
                    };
                };
                t.exports = {
                    start: l(1),
                    end: l(2),
                    trim: l(3)
                };
            },
            4495: function(t, e, n) {
                var o = n(7388), r = n(9039), i = n(4475).String;
                t.exports = !!Object.getOwnPropertySymbols && !r(function() {
                    var t = Symbol("symbol detection");
                    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && o && o < 41;
                });
            },
            8242: function(t, e, n) {
                var o = n(9565), r = n(7751), i = n(8227), a = n(6840);
                t.exports = function() {
                    var t = r("Symbol"), e = t && t.prototype, n = e && e.valueOf, s = i("toPrimitive");
                    e && !e[s] && a(e, s, function(t) {
                        return o(n, this);
                    }, {
                        arity: 1
                    });
                };
            },
            1296: function(t, e, n) {
                var o = n(4495);
                t.exports = o && !!Symbol.for && !!Symbol.keyFor;
            },
            1240: function(t, e, n) {
                var o = n(9504);
                t.exports = o(1..valueOf);
            },
            5610: function(t, e, n) {
                var o = n(1291), r = Math.max, i = Math.min;
                t.exports = function(t, e) {
                    var n = o(t);
                    return n < 0 ? r(n + e, 0) : i(n, e);
                };
            },
            5397: function(t, e, n) {
                var o = n(7055), r = n(7750);
                t.exports = function(t) {
                    return o(r(t));
                };
            },
            1291: function(t, e, n) {
                var o = n(741);
                t.exports = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : o(e);
                };
            },
            8014: function(t, e, n) {
                var o = n(1291), r = Math.min;
                t.exports = function(t) {
                    var e = o(t);
                    return e > 0 ? r(e, 9007199254740991) : 0;
                };
            },
            8981: function(t, e, n) {
                var o = n(7750), r = Object;
                t.exports = function(t) {
                    return r(o(t));
                };
            },
            2777: function(t, e, n) {
                var o = n(9565), r = n(34), i = n(757), a = n(5966), s = n(4270), u = n(8227), c = TypeError, l = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!r(t) || i(t)) return t;
                    var n, u = a(t, l);
                    if (u) {
                        if (void 0 === e && (e = "default"), n = o(u, t, e), !r(n) || i(n)) return n;
                        throw new c("Can't convert object to primitive value");
                    }
                    return void 0 === e && (e = "number"), s(t, e);
                };
            },
            6969: function(t, e, n) {
                var o = n(2777), r = n(757);
                t.exports = function(t) {
                    var e = o(t, "string");
                    return r(e) ? e : e + "";
                };
            },
            2140: function(t, e, n) {
                var o = {};
                o[n(8227)("toStringTag")] = "z", t.exports = "[object z]" === String(o);
            },
            655: function(t, e, n) {
                var o = n(6955), r = String;
                t.exports = function(t) {
                    if ("Symbol" === o(t)) throw new TypeError("Cannot convert a Symbol value to a string");
                    return r(t);
                };
            },
            6823: function(t) {
                var e = String;
                t.exports = function(t) {
                    try {
                        return e(t);
                    } catch (t) {
                        return "Object";
                    }
                };
            },
            3392: function(t, e, n) {
                var o = n(9504), r = 0, i = Math.random(), a = o(1..toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++r + i, 36);
                };
            },
            7040: function(t, e, n) {
                var o = n(4495);
                t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            8686: function(t, e, n) {
                var o = n(3724), r = n(9039);
                t.exports = o && r(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype;
                });
            },
            8622: function(t, e, n) {
                var o = n(4475), r = n(4901), i = o.WeakMap;
                t.exports = r(i) && /native code/.test(String(i));
            },
            511: function(t, e, n) {
                var o = n(9167), r = n(9297), i = n(1951), a = n(4913).f;
                t.exports = function(t) {
                    var e = o.Symbol || (o.Symbol = {});
                    r(e, t) || a(e, t, {
                        value: i.f(t)
                    });
                };
            },
            1951: function(t, e, n) {
                var o = n(8227);
                e.f = o;
            },
            8227: function(t, e, n) {
                var o = n(4475), r = n(5745), i = n(9297), a = n(3392), s = n(4495), u = n(7040), c = o.Symbol, l = r("wks"), f = u ? c.for || c : c && c.withoutSetter || a;
                t.exports = function(t) {
                    return i(l, t) || (l[t] = s && i(c, t) ? c[t] : f("Symbol." + t)), l[t];
                };
            },
            7452: function(t) {
                t.exports = "	\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
            },
            8706: function(t, e, n) {
                var o = n(6518), r = n(9039), i = n(4376), a = n(34), s = n(8981), u = n(6198), c = n(6837), l = n(4659), f = n(1469), d = n(597), p = n(8227), h = n(7388), v = p("isConcatSpreadable"), y = h >= 51 || !r(function() {
                    var t = [];
                    return t[v] = !1, t.concat()[0] !== t;
                }), g = function(t) {
                    if (!a(t)) return !1;
                    var e = t[v];
                    return void 0 !== e ? !!e : i(t);
                };
                o({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: !y || !d("concat")
                }, {
                    concat: function(t) {
                        var e, n, o, r, i, a = s(this), d = f(a, 0), p = 0;
                        for(e = -1, o = arguments.length; e < o; e++)if (g(i = -1 === e ? a : arguments[e])) for(r = u(i), c(p + r), n = 0; n < r; n++, p++)n in i && l(d, p, i[n]);
                        else c(p + 1), l(d, p++, i);
                        return d.length = p, d;
                    }
                });
            },
            2008: function(t, e, n) {
                var o = n(6518), r = n(9213).filter;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !n(597)("filter")
                }, {
                    filter: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    }
                });
            },
            3418: function(t, e, n) {
                var o = n(6518), r = n(7916);
                o({
                    target: "Array",
                    stat: !0,
                    forced: !n(4428)(function(t) {
                        Array.from(t);
                    })
                }, {
                    from: r
                });
            },
            4423: function(t, e, n) {
                var o = n(6518), r = n(9617).includes, i = n(9039), a = n(6469);
                o({
                    target: "Array",
                    proto: !0,
                    forced: i(function() {
                        return !Array(1).includes();
                    })
                }, {
                    includes: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }), a("includes");
            },
            5276: function(t, e, n) {
                var o = n(6518), r = n(7476), i = n(9617).indexOf, a = n(4598), s = r([].indexOf), u = !!s && 1 / s([
                    1
                ], 1, -0) < 0;
                o({
                    target: "Array",
                    proto: !0,
                    forced: u || !a("indexOf")
                }, {
                    indexOf: function(t) {
                        var e = arguments.length > 1 ? arguments[1] : void 0;
                        return u ? s(this, t, e) || 0 : i(this, t, e);
                    }
                });
            },
            3792: function(t, e, n) {
                var o = n(5397), r = n(6469), i = n(6269), a = n(1181), s = n(4913).f, u = n(1088), c = n(2529), l = n(6395), f = n(3724), d = "Array Iterator", p = a.set, h = a.getterFor(d);
                t.exports = u(Array, "Array", function(t, e) {
                    p(this, {
                        type: d,
                        target: o(t),
                        index: 0,
                        kind: e
                    });
                }, function() {
                    var t = h(this), e = t.target, n = t.index++;
                    if (!e || n >= e.length) return t.target = void 0, c(void 0, !0);
                    switch(t.kind){
                        case "keys":
                            return c(n, !1);
                        case "values":
                            return c(e[n], !1);
                    }
                    return c([
                        n,
                        e[n]
                    ], !1);
                }, "values");
                var v = i.Arguments = i.Array;
                if (r("keys"), r("values"), r("entries"), !l && f && "values" !== v.name) try {
                    s(v, "name", {
                        value: "values"
                    });
                } catch (t) {}
            },
            8598: function(t, e, n) {
                var o = n(6518), r = n(9504), i = n(7055), a = n(5397), s = n(4598), u = r([].join);
                o({
                    target: "Array",
                    proto: !0,
                    forced: i !== Object || !s("join", ",")
                }, {
                    join: function(t) {
                        return u(a(this), void 0 === t ? "," : t);
                    }
                });
            },
            2062: function(t, e, n) {
                var o = n(6518), r = n(9213).map;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !n(597)("map")
                }, {
                    map: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    }
                });
            },
            2712: function(t, e, n) {
                var o = n(6518), r = n(926).left, i = n(4598), a = n(7388);
                o({
                    target: "Array",
                    proto: !0,
                    forced: !n(9088) && a > 79 && a < 83 || !i("reduce")
                }, {
                    reduce: function(t) {
                        var e = arguments.length;
                        return r(this, t, e, e > 1 ? arguments[1] : void 0);
                    }
                });
            },
            4782: function(t, e, n) {
                var o = n(6518), r = n(4376), i = n(3517), a = n(34), s = n(5610), u = n(6198), c = n(5397), l = n(4659), f = n(8227), d = n(597), p = n(7680), h = d("slice"), v = f("species"), y = Array, g = Math.max;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !h
                }, {
                    slice: function(t, e) {
                        var n, o, f, d = c(this), h = u(d), m = s(t, h), b = s(void 0 === e ? h : e, h);
                        if (r(d) && (n = d.constructor, (i(n) && (n === y || r(n.prototype)) || a(n) && null === (n = n[v])) && (n = void 0), n === y || void 0 === n)) return p(d, m, b);
                        for(o = new (void 0 === n ? y : n)(g(b - m, 0)), f = 0; m < b; m++, f++)m in d && l(o, f, d[m]);
                        return o.length = f, o;
                    }
                });
            },
            6910: function(t, e, n) {
                var o = n(6518), r = n(9504), i = n(9306), a = n(8981), s = n(6198), u = n(4606), c = n(655), l = n(9039), f = n(4488), d = n(4598), p = n(8834), h = n(3202), v = n(7388), y = n(9160), g = [], m = r(g.sort), b = r(g.push), x = l(function() {
                    g.sort(void 0);
                }), w = l(function() {
                    g.sort(null);
                }), E = d("sort"), O = !l(function() {
                    if (v) return v < 70;
                    if (!(p && p > 3)) {
                        if (h) return !0;
                        if (y) return y < 603;
                        var t, e, n, o, r = "";
                        for(t = 65; t < 76; t++){
                            switch(e = String.fromCharCode(t), t){
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    n = 3;
                                    break;
                                case 68:
                                case 71:
                                    n = 4;
                                    break;
                                default:
                                    n = 2;
                            }
                            for(o = 0; o < 47; o++)g.push({
                                k: e + o,
                                v: n
                            });
                        }
                        for(g.sort(function(t, e) {
                            return e.v - t.v;
                        }), o = 0; o < g.length; o++)e = g[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
                        return "DGBEFHACIJK" !== r;
                    }
                });
                o({
                    target: "Array",
                    proto: !0,
                    forced: x || !w || !E || !O
                }, {
                    sort: function(t) {
                        void 0 !== t && i(t);
                        var e = a(this);
                        if (O) return void 0 === t ? m(e) : m(e, t);
                        var n, o, r = [], l = s(e);
                        for(o = 0; o < l; o++)o in e && b(r, e[o]);
                        for(f(r, function(t) {
                            return function(e, n) {
                                return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : c(e) > c(n) ? 1 : -1;
                            };
                        }(t)), n = s(r), o = 0; o < n;)e[o] = r[o++];
                        for(; o < l;)u(e, o++);
                        return e;
                    }
                });
            },
            4554: function(t, e, n) {
                var o = n(6518), r = n(8981), i = n(5610), a = n(1291), s = n(6198), u = n(4527), c = n(6837), l = n(1469), f = n(4659), d = n(4606), p = n(597)("splice"), h = Math.max, v = Math.min;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !p
                }, {
                    splice: function(t, e) {
                        var n, o, p, y, g, m, b = r(this), x = s(b), w = i(t, x), E = arguments.length;
                        for(0 === E ? n = o = 0 : 1 === E ? (n = 0, o = x - w) : (n = E - 2, o = v(h(a(e), 0), x - w)), c(x + n - o), p = l(b, o), y = 0; y < o; y++)(g = w + y) in b && f(p, y, b[g]);
                        if (p.length = o, n < o) {
                            for(y = w; y < x - o; y++)m = y + n, (g = y + o) in b ? b[m] = b[g] : d(b, m);
                            for(y = x; y > x - o + n; y--)d(b, y - 1);
                        } else if (n > o) for(y = x - o; y > w; y--)m = y + n - 1, (g = y + o - 1) in b ? b[m] = b[g] : d(b, m);
                        for(y = 0; y < n; y++)b[y + w] = arguments[y + 2];
                        return u(b, x - o + n), p;
                    }
                });
            },
            9572: function(t, e, n) {
                var o = n(9297), r = n(6840), i = n(3640), a = n(8227)("toPrimitive"), s = Date.prototype;
                o(s, a) || r(s, a, i);
            },
            2010: function(t, e, n) {
                var o = n(3724), r = n(350).EXISTS, i = n(9504), a = n(2106), s = Function.prototype, u = i(s.toString), c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = i(c.exec);
                o && !r && a(s, "name", {
                    configurable: !0,
                    get: function() {
                        try {
                            return l(c, u(this))[1];
                        } catch (t) {
                            return "";
                        }
                    }
                });
            },
            3110: function(t, e, n) {
                var o = n(6518), r = n(7751), i = n(8745), a = n(9565), s = n(9504), u = n(9039), c = n(4901), l = n(757), f = n(7680), d = n(6933), p = n(4495), h = String, v = r("JSON", "stringify"), y = s(/./.exec), g = s("".charAt), m = s("".charCodeAt), b = s("".replace), x = s(1..toString), w = /[\uD800-\uDFFF]/g, E = /^[\uD800-\uDBFF]$/, O = /^[\uDC00-\uDFFF]$/, S = !p || u(function() {
                    var t = r("Symbol")("stringify detection");
                    return "[null]" !== v([
                        t
                    ]) || "{}" !== v({
                        a: t
                    }) || "{}" !== v(Object(t));
                }), k = u(function() {
                    return '"\udf06\ud834"' !== v("\udf06\ud834") || '"\udead"' !== v("\udead");
                }), P = function(t, e) {
                    var n = f(arguments), o = d(e);
                    if (c(o) || void 0 !== t && !l(t)) return n[1] = function(t, e) {
                        if (c(o) && (e = a(o, this, h(t), e)), !l(e)) return e;
                    }, i(v, null, n);
                }, I = function(t, e, n) {
                    var o = g(n, e - 1), r = g(n, e + 1);
                    return y(E, t) && !y(O, r) || y(O, t) && !y(E, o) ? "\\u" + x(m(t, 0), 16) : t;
                };
                v && o({
                    target: "JSON",
                    stat: !0,
                    arity: 3,
                    forced: S || k
                }, {
                    stringify: function(t, e, n) {
                        var o = f(arguments), r = i(S ? P : v, null, o);
                        return k && "string" == typeof r ? b(r, w, I) : r;
                    }
                });
            },
            2892: function(t, e, n) {
                var o = n(6518), r = n(6395), i = n(3724), a = n(4475), s = n(9167), u = n(9504), c = n(2796), l = n(9297), f = n(3167), d = n(1625), p = n(757), h = n(2777), v = n(9039), y = n(8480).f, g = n(7347).f, m = n(4913).f, b = n(1240), x = n(3802).trim, w = "Number", E = a[w], O = s[w], S = E.prototype, k = a.TypeError, P = u("".slice), I = u("".charCodeAt), C = function(t) {
                    var e, n, o, r, i, a, s, u, c = h(t, "number");
                    if (p(c)) throw new k("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2) {
                        if (c = x(c), 43 === (e = I(c, 0)) || 45 === e) {
                            if (88 === (n = I(c, 2)) || 120 === n) return NaN;
                        } else if (48 === e) {
                            switch(I(c, 1)){
                                case 66:
                                case 98:
                                    o = 2, r = 49;
                                    break;
                                case 79:
                                case 111:
                                    o = 8, r = 55;
                                    break;
                                default:
                                    return +c;
                            }
                            for(a = (i = P(c, 2)).length, s = 0; s < a; s++)if ((u = I(i, s)) < 48 || u > r) return NaN;
                            return parseInt(i, o);
                        }
                    }
                    return +c;
                }, A = c(w, !E(" 0o1") || !E("0b1") || E("+0x1")), M = function(t) {
                    var e, n = arguments.length < 1 ? 0 : E(function(t) {
                        var e = h(t, "number");
                        return "bigint" == typeof e ? e : C(e);
                    }(t));
                    return d(S, e = this) && v(function() {
                        b(e);
                    }) ? f(Object(n), this, M) : n;
                };
                M.prototype = S, A && !r && (S.constructor = M), o({
                    global: !0,
                    constructor: !0,
                    wrap: !0,
                    forced: A
                }, {
                    Number: M
                });
                var T = function(t, e) {
                    for(var n, o = i ? y(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), r = 0; o.length > r; r++)l(e, n = o[r]) && !l(t, n) && m(t, n, g(e, n));
                };
                r && O && T(s[w], O), (A || r) && T(s[w], E);
            },
            2637: function(t, e, n) {
                n(6518)({
                    target: "Number",
                    stat: !0
                }, {
                    isInteger: n(2087)
                });
            },
            9085: function(t, e, n) {
                var o = n(6518), r = n(4213);
                o({
                    target: "Object",
                    stat: !0,
                    arity: 2,
                    forced: Object.assign !== r
                }, {
                    assign: r
                });
            },
            7427: function(t, e, n) {
                var o = n(6518), r = n(3724), i = n(2551), a = n(9306), s = n(8981), u = n(4913);
                r && o({
                    target: "Object",
                    proto: !0,
                    forced: i
                }, {
                    __defineGetter__: function(t, e) {
                        u.f(s(this), t, {
                            get: a(e),
                            enumerable: !0,
                            configurable: !0
                        });
                    }
                });
            },
            3851: function(t, e, n) {
                var o = n(6518), r = n(9039), i = n(5397), a = n(7347).f, s = n(3724);
                o({
                    target: "Object",
                    stat: !0,
                    forced: !s || r(function() {
                        a(1);
                    }),
                    sham: !s
                }, {
                    getOwnPropertyDescriptor: function(t, e) {
                        return a(i(t), e);
                    }
                });
            },
            1278: function(t, e, n) {
                var o = n(6518), r = n(3724), i = n(5031), a = n(5397), s = n(7347), u = n(4659);
                o({
                    target: "Object",
                    stat: !0,
                    sham: !r
                }, {
                    getOwnPropertyDescriptors: function(t) {
                        for(var e, n, o = a(t), r = s.f, c = i(o), l = {}, f = 0; c.length > f;)void 0 !== (n = r(o, e = c[f++])) && u(l, e, n);
                        return l;
                    }
                });
            },
            1480: function(t, e, n) {
                var o = n(6518), r = n(9039), i = n(298).f;
                o({
                    target: "Object",
                    stat: !0,
                    forced: r(function() {
                        return !Object.getOwnPropertyNames(1);
                    })
                }, {
                    getOwnPropertyNames: i
                });
            },
            9773: function(t, e, n) {
                var o = n(6518), r = n(4495), i = n(9039), a = n(3717), s = n(8981);
                o({
                    target: "Object",
                    stat: !0,
                    forced: !r || i(function() {
                        a.f(1);
                    })
                }, {
                    getOwnPropertySymbols: function(t) {
                        var e = a.f;
                        return e ? e(s(t)) : [];
                    }
                });
            },
            9432: function(t, e, n) {
                var o = n(6518), r = n(8981), i = n(1072);
                o({
                    target: "Object",
                    stat: !0,
                    forced: n(9039)(function() {
                        i(1);
                    })
                }, {
                    keys: function(t) {
                        return i(r(t));
                    }
                });
            },
            6099: function(t, e, n) {
                var o = n(2140), r = n(6840), i = n(3179);
                o || r(Object.prototype, "toString", i, {
                    unsafe: !0
                });
            },
            4864: function(t, e, n) {
                var o = n(3724), r = n(4475), i = n(9504), a = n(2796), s = n(3167), u = n(6699), c = n(2360), l = n(8480).f, f = n(1625), d = n(788), p = n(655), h = n(1034), v = n(8429), y = n(1056), g = n(6840), m = n(9039), b = n(9297), x = n(1181).enforce, w = n(7633), E = n(8227), O = n(3635), S = n(8814), k = E("match"), P = r.RegExp, I = P.prototype, C = r.SyntaxError, A = i(I.exec), M = i("".charAt), T = i("".replace), D = i("".indexOf), j = i("".slice), N = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, R = /a/g, L = /a/g, B = new P(R) !== R, K = v.MISSED_STICKY, F = v.UNSUPPORTED_Y, _ = o && (!B || K || O || S || m(function() {
                    return L[k] = !1, P(R) !== R || P(L) === L || "/a/i" !== String(P(R, "i"));
                }));
                if (a("RegExp", _)) {
                    for(var H = function(t, e) {
                        var n, o, r, i, a, l, v = f(I, this), y = d(t), g = void 0 === e, m = [], w = t;
                        if (!v && y && g && t.constructor === H) return t;
                        if ((y || f(I, t)) && (t = t.source, g && (e = h(w))), t = void 0 === t ? "" : p(t), e = void 0 === e ? "" : p(e), w = t, O && ("dotAll" in R) && (o = !!e && D(e, "s") > -1) && (e = T(e, /s/g, "")), n = e, K && ("sticky" in R) && (r = !!e && D(e, "y") > -1) && F && (e = T(e, /y/g, "")), S && (i = function(t) {
                            for(var e, n = t.length, o = 0, r = "", i = [], a = c(null), s = !1, u = !1, l = 0, f = ""; o <= n; o++){
                                if ("\\" === (e = M(t, o))) e += M(t, ++o);
                                else if ("]" === e) s = !1;
                                else if (!s) switch(!0){
                                    case "[" === e:
                                        s = !0;
                                        break;
                                    case "(" === e:
                                        A(N, j(t, o + 1)) && (o += 2, u = !0), r += e, l++;
                                        continue;
                                    case ">" === e && u:
                                        if ("" === f || b(a, f)) throw new C("Invalid capture group name");
                                        a[f] = !0, i[i.length] = [
                                            f,
                                            l
                                        ], u = !1, f = "";
                                        continue;
                                }
                                u ? f += e : r += e;
                            }
                            return [
                                r,
                                i
                            ];
                        }(t), t = i[0], m = i[1]), a = s(P(t, e), v ? this : I, H), (o || r || m.length) && (l = x(a), o && (l.dotAll = !0, l.raw = H(function(t) {
                            for(var e, n = t.length, o = 0, r = "", i = !1; o <= n; o++)"\\" !== (e = M(t, o)) ? i || "." !== e ? ("[" === e ? i = !0 : "]" === e && (i = !1), r += e) : r += "[\\s\\S]" : r += e + M(t, ++o);
                            return r;
                        }(t), n)), r && (l.sticky = !0), m.length && (l.groups = m)), t !== w) try {
                            u(a, "source", "" === w ? "(?:)" : w);
                        } catch (t) {}
                        return a;
                    }, U = l(P), $ = 0; U.length > $;)y(H, P, U[$++]);
                    I.constructor = H, H.prototype = I, g(r, "RegExp", H, {
                        constructor: !0
                    });
                }
                w("RegExp");
            },
            7495: function(t, e, n) {
                var o = n(6518), r = n(7323);
                o({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== r
                }, {
                    exec: r
                });
            },
            8781: function(t, e, n) {
                var o = n(350).PROPER, r = n(6840), i = n(8551), a = n(655), s = n(9039), u = n(1034), c = "toString", l = RegExp.prototype, f = l[c], d = s(function() {
                    return "/a/b" !== f.call({
                        source: "a",
                        flags: "b"
                    });
                }), p = o && f.name !== c;
                (d || p) && r(l, c, function() {
                    var t = i(this);
                    return "/" + a(t.source) + "/" + a(u(t));
                }, {
                    unsafe: !0
                });
            },
            1699: function(t, e, n) {
                var o = n(6518), r = n(9504), i = n(5749), a = n(7750), s = n(655), u = n(1436), c = r("".indexOf);
                o({
                    target: "String",
                    proto: !0,
                    forced: !u("includes")
                }, {
                    includes: function(t) {
                        return !!~c(s(a(this)), s(i(t)), arguments.length > 1 ? arguments[1] : void 0);
                    }
                });
            },
            7764: function(t, e, n) {
                var o = n(8183).charAt, r = n(655), i = n(1181), a = n(1088), s = n(2529), u = "String Iterator", c = i.set, l = i.getterFor(u);
                a(String, "String", function(t) {
                    c(this, {
                        type: u,
                        string: r(t),
                        index: 0
                    });
                }, function() {
                    var t, e = l(this), n = e.string, r = e.index;
                    return r >= n.length ? s(void 0, !0) : (t = o(n, r), e.index += t.length, s(t, !1));
                });
            },
            8543: function(t, e, n) {
                var o = n(6518), r = n(9565), i = n(7476), a = n(3994), s = n(2529), u = n(7750), c = n(8014), l = n(655), f = n(8551), d = n(4117), p = n(4576), h = n(788), v = n(1034), y = n(5966), g = n(6840), m = n(9039), b = n(8227), x = n(2293), w = n(7829), E = n(6682), O = n(1181), S = n(6395), k = b("matchAll"), P = "RegExp String", I = P + " Iterator", C = O.set, A = O.getterFor(I), M = RegExp.prototype, T = TypeError, D = i("".indexOf), j = i("".matchAll), N = !!j && !m(function() {
                    j("a", /./);
                }), R = a(function(t, e, n, o) {
                    C(this, {
                        type: I,
                        regexp: t,
                        string: e,
                        global: n,
                        unicode: o,
                        done: !1
                    });
                }, P, function() {
                    var t = A(this);
                    if (t.done) return s(void 0, !0);
                    var e = t.regexp, n = t.string, o = E(e, n);
                    return null === o ? (t.done = !0, s(void 0, !0)) : t.global ? ("" === l(o[0]) && (e.lastIndex = w(n, c(e.lastIndex), t.unicode)), s(o, !1)) : (t.done = !0, s(o, !1));
                }), L = function(t) {
                    var e, n, o, r = f(this), i = l(t), a = x(r, RegExp), s = l(v(r));
                    return e = new a(a === RegExp ? r.source : r, s), n = !!~D(s, "g"), o = !!~D(s, "u"), e.lastIndex = c(r.lastIndex), new R(e, i, n, o);
                };
                o({
                    target: "String",
                    proto: !0,
                    forced: N
                }, {
                    matchAll: function(t) {
                        var e, n, o, i, a = u(this);
                        if (d(t)) {
                            if (N) return j(a, t);
                        } else {
                            if (h(t) && (e = l(u(v(t))), !~D(e, "g"))) throw new T("`.matchAll` does not allow non-global regexes");
                            if (N) return j(a, t);
                            if (void 0 === (o = y(t, k)) && S && "RegExp" === p(t) && (o = L), o) return r(o, t, a);
                        }
                        return n = l(a), i = new RegExp(t, "g"), S ? r(L, i, n) : i[k](n);
                    }
                }), S || k in M || g(M, k, L);
            },
            1761: function(t, e, n) {
                var o = n(9565), r = n(9228), i = n(8551), a = n(4117), s = n(8014), u = n(655), c = n(7750), l = n(5966), f = n(7829), d = n(6682);
                r("match", function(t, e, n) {
                    return [
                        function(e) {
                            var n = c(this), r = a(e) ? void 0 : l(e, t);
                            return r ? o(r, e, n) : new RegExp(e)[t](u(n));
                        },
                        function(t) {
                            var o = i(this), r = u(t), a = n(e, o, r);
                            if (a.done) return a.value;
                            if (!o.global) return d(o, r);
                            var c = o.unicode;
                            o.lastIndex = 0;
                            for(var l, p = [], h = 0; null !== (l = d(o, r));){
                                var v = u(l[0]);
                                p[h] = v, "" === v && (o.lastIndex = f(r, s(o.lastIndex), c)), h++;
                            }
                            return 0 === h ? null : p;
                        }
                    ];
                });
            },
            5440: function(t, e, n) {
                var o = n(8745), r = n(9565), i = n(9504), a = n(9228), s = n(9039), u = n(8551), c = n(4901), l = n(4117), f = n(1291), d = n(8014), p = n(655), h = n(7750), v = n(7829), y = n(5966), g = n(2478), m = n(6682), b = n(8227)("replace"), x = Math.max, w = Math.min, E = i([].concat), O = i([].push), S = i("".indexOf), k = i("".slice), P = "$0" === "a".replace(/./, "$0"), I = !!/./[b] && "" === /./[b]("a", "$0");
                a("replace", function(t, e, n) {
                    var i = I ? "$" : "$0";
                    return [
                        function(t, n) {
                            var o = h(this), i = l(t) ? void 0 : y(t, b);
                            return i ? r(i, t, o, n) : r(e, p(o), t, n);
                        },
                        function(t, r) {
                            var a = u(this), s = p(t);
                            if ("string" == typeof r && -1 === S(r, i) && -1 === S(r, "$<")) {
                                var l = n(e, a, s, r);
                                if (l.done) return l.value;
                            }
                            var h = c(r);
                            h || (r = p(r));
                            var y, b = a.global;
                            b && (y = a.unicode, a.lastIndex = 0);
                            for(var P, I = []; null !== (P = m(a, s)) && (O(I, P), b);)"" === p(P[0]) && (a.lastIndex = v(s, d(a.lastIndex), y));
                            for(var C, A = "", M = 0, T = 0; T < I.length; T++){
                                for(var D, j = p((P = I[T])[0]), N = x(w(f(P.index), s.length), 0), R = [], L = 1; L < P.length; L++)O(R, void 0 === (C = P[L]) ? C : String(C));
                                var B = P.groups;
                                if (h) {
                                    var K = E([
                                        j
                                    ], R, N, s);
                                    void 0 !== B && O(K, B), D = p(o(r, void 0, K));
                                } else D = g(j, s, N, R, B, r);
                                N >= M && (A += k(s, M, N) + D, M = N + j.length);
                            }
                            return A + k(s, M);
                        }
                    ];
                }, !!s(function() {
                    var t = /./;
                    return t.exec = function() {
                        var t = [];
                        return t.groups = {
                            a: "7"
                        }, t;
                    }, "7" !== "".replace(t, "$<a>");
                }) || !P || I);
            },
            744: function(t, e, n) {
                var o = n(9565), r = n(9504), i = n(9228), a = n(8551), s = n(4117), u = n(7750), c = n(2293), l = n(7829), f = n(8014), d = n(655), p = n(5966), h = n(6682), v = n(8429), y = n(9039), g = v.UNSUPPORTED_Y, m = Math.min, b = r([].push), x = r("".slice), w = !y(function() {
                    var t = /(?:)/, e = t.exec;
                    t.exec = function() {
                        return e.apply(this, arguments);
                    };
                    var n = "ab".split(t);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
                }), E = "c" === "abbc".split(/(b)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length;
                i("split", function(t, e, n) {
                    var r = "0".split(void 0, 0).length ? function(t, n) {
                        return void 0 === t && 0 === n ? [] : o(e, this, t, n);
                    } : e;
                    return [
                        function(e, n) {
                            var i = u(this), a = s(e) ? void 0 : p(e, t);
                            return a ? o(a, e, i, n) : o(r, d(i), e, n);
                        },
                        function(t, o) {
                            var i = a(this), s = d(t);
                            if (!E) {
                                var u = n(r, i, s, o, r !== e);
                                if (u.done) return u.value;
                            }
                            var p = c(i, RegExp), v = i.unicode, y = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (g ? "g" : "y"), w = new p(g ? "^(?:" + i.source + ")" : i, y), O = void 0 === o ? 4294967295 : o >>> 0;
                            if (0 === O) return [];
                            if (0 === s.length) return null === h(w, s) ? [
                                s
                            ] : [];
                            for(var S = 0, k = 0, P = []; k < s.length;){
                                w.lastIndex = g ? 0 : k;
                                var I, C = h(w, g ? x(s, k) : s);
                                if (null === C || (I = m(f(w.lastIndex + (g ? k : 0)), s.length)) === S) k = l(s, k, v);
                                else {
                                    if (b(P, x(s, S, k)), P.length === O) return P;
                                    for(var A = 1; A <= C.length - 1; A++)if (b(P, C[A]), P.length === O) return P;
                                    k = S = I;
                                }
                            }
                            return b(P, x(s, S)), P;
                        }
                    ];
                }, E || !w, g);
            },
            2762: function(t, e, n) {
                var o = n(6518), r = n(3802).trim;
                o({
                    target: "String",
                    proto: !0,
                    forced: n(706)("trim")
                }, {
                    trim: function() {
                        return r(this);
                    }
                });
            },
            6761: function(t, e, n) {
                var o = n(6518), r = n(4475), i = n(9565), a = n(9504), s = n(6395), u = n(3724), c = n(4495), l = n(9039), f = n(9297), d = n(1625), p = n(8551), h = n(5397), v = n(6969), y = n(655), g = n(6980), m = n(2360), b = n(1072), x = n(8480), w = n(298), E = n(3717), O = n(7347), S = n(4913), k = n(6801), P = n(8773), I = n(6840), C = n(2106), A = n(5745), M = n(6119), T = n(421), D = n(3392), j = n(8227), N = n(1951), R = n(511), L = n(8242), B = n(687), K = n(1181), F = n(9213).forEach, _ = M("hidden"), H = "Symbol", U = "prototype", $ = K.set, G = K.getterFor(H), V = Object[U], z = r.Symbol, Y = z && z[U], W = r.RangeError, X = r.TypeError, J = r.QObject, q = O.f, Q = S.f, Z = w.f, tt = P.f, et = a([].push), nt = A("symbols"), ot = A("op-symbols"), rt = A("wks"), it = !J || !J[U] || !J[U].findChild, at = function(t, e, n) {
                    var o = q(V, e);
                    o && delete V[e], Q(t, e, n), o && t !== V && Q(V, e, o);
                }, st = u && l(function() {
                    return 7 !== m(Q({}, "a", {
                        get: function() {
                            return Q(this, "a", {
                                value: 7
                            }).a;
                        }
                    })).a;
                }) ? at : Q, ut = function(t, e) {
                    var n = nt[t] = m(Y);
                    return $(n, {
                        type: H,
                        tag: t,
                        description: e
                    }), u || (n.description = e), n;
                }, ct = function(t, e, n) {
                    t === V && ct(ot, e, n), p(t);
                    var o = v(e);
                    return p(n), f(nt, o) ? (n.enumerable ? (f(t, _) && t[_][o] && (t[_][o] = !1), n = m(n, {
                        enumerable: g(0, !1)
                    })) : (f(t, _) || Q(t, _, g(1, m(null))), t[_][o] = !0), st(t, o, n)) : Q(t, o, n);
                }, lt = function(t, e) {
                    p(t);
                    var n = h(e), o = b(n).concat(ht(n));
                    return F(o, function(e) {
                        u && !i(ft, n, e) || ct(t, e, n[e]);
                    }), t;
                }, ft = function(t) {
                    var e = v(t), n = i(tt, this, e);
                    return !(this === V && f(nt, e) && !f(ot, e)) && (!(n || !f(this, e) || !f(nt, e) || f(this, _) && this[_][e]) || n);
                }, dt = function(t, e) {
                    var n = h(t), o = v(e);
                    if (n !== V || !f(nt, o) || f(ot, o)) {
                        var r = q(n, o);
                        return !r || !f(nt, o) || f(n, _) && n[_][o] || (r.enumerable = !0), r;
                    }
                }, pt = function(t) {
                    var e = Z(h(t)), n = [];
                    return F(e, function(t) {
                        f(nt, t) || f(T, t) || et(n, t);
                    }), n;
                }, ht = function(t) {
                    var e = t === V, n = Z(e ? ot : h(t)), o = [];
                    return F(n, function(t) {
                        !f(nt, t) || e && !f(V, t) || et(o, nt[t]);
                    }), o;
                };
                c || (z = function() {
                    if (d(Y, this)) throw new X("Symbol is not a constructor");
                    var t = arguments.length && void 0 !== arguments[0] ? y(arguments[0]) : void 0, e = D(t), n = function(t) {
                        var o = void 0 === this ? r : this;
                        o === V && i(n, ot, t), f(o, _) && f(o[_], e) && (o[_][e] = !1);
                        var a = g(1, t);
                        try {
                            st(o, e, a);
                        } catch (t) {
                            if (!(t instanceof W)) throw t;
                            at(o, e, a);
                        }
                    };
                    return u && it && st(V, e, {
                        configurable: !0,
                        set: n
                    }), ut(e, t);
                }, I(Y = z[U], "toString", function() {
                    return G(this).tag;
                }), I(z, "withoutSetter", function(t) {
                    return ut(D(t), t);
                }), P.f = ft, S.f = ct, k.f = lt, O.f = dt, x.f = w.f = pt, E.f = ht, N.f = function(t) {
                    return ut(j(t), t);
                }, u && (C(Y, "description", {
                    configurable: !0,
                    get: function() {
                        return G(this).description;
                    }
                }), s || I(V, "propertyIsEnumerable", ft, {
                    unsafe: !0
                }))), o({
                    global: !0,
                    constructor: !0,
                    wrap: !0,
                    forced: !c,
                    sham: !c
                }, {
                    Symbol: z
                }), F(b(rt), function(t) {
                    R(t);
                }), o({
                    target: H,
                    stat: !0,
                    forced: !c
                }, {
                    useSetter: function() {
                        it = !0;
                    },
                    useSimple: function() {
                        it = !1;
                    }
                }), o({
                    target: "Object",
                    stat: !0,
                    forced: !c,
                    sham: !u
                }, {
                    create: function(t, e) {
                        return void 0 === e ? m(t) : lt(m(t), e);
                    },
                    defineProperty: ct,
                    defineProperties: lt,
                    getOwnPropertyDescriptor: dt
                }), o({
                    target: "Object",
                    stat: !0,
                    forced: !c
                }, {
                    getOwnPropertyNames: pt
                }), L(), B(z, H), T[_] = !0;
            },
            9463: function(t, e, n) {
                var o = n(6518), r = n(3724), i = n(4475), a = n(9504), s = n(9297), u = n(4901), c = n(1625), l = n(655), f = n(2106), d = n(7740), p = i.Symbol, h = p && p.prototype;
                if (r && u(p) && (!("description" in h) || void 0 !== p().description)) {
                    var v = {}, y = function() {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]), e = c(h, this) ? new p(t) : void 0 === t ? p() : p(t);
                        return "" === t && (v[e] = !0), e;
                    };
                    d(y, p), y.prototype = h, h.constructor = y;
                    var g = "Symbol(description detection)" === String(p("description detection")), m = a(h.valueOf), b = a(h.toString), x = /^Symbol\((.*)\)[^)]+$/, w = a("".replace), E = a("".slice);
                    f(h, "description", {
                        configurable: !0,
                        get: function() {
                            var t = m(this);
                            if (s(v, t)) return "";
                            var e = b(t), n = g ? E(e, 7, -1) : w(e, x, "$1");
                            return "" === n ? void 0 : n;
                        }
                    }), o({
                        global: !0,
                        constructor: !0,
                        forced: !0
                    }, {
                        Symbol: y
                    });
                }
            },
            1510: function(t, e, n) {
                var o = n(6518), r = n(7751), i = n(9297), a = n(655), s = n(5745), u = n(1296), c = s("string-to-symbol-registry"), l = s("symbol-to-string-registry");
                o({
                    target: "Symbol",
                    stat: !0,
                    forced: !u
                }, {
                    for: function(t) {
                        var e = a(t);
                        if (i(c, e)) return c[e];
                        var n = r("Symbol")(e);
                        return c[e] = n, l[n] = e, n;
                    }
                });
            },
            2259: function(t, e, n) {
                n(511)("iterator");
            },
            2675: function(t, e, n) {
                n(6761), n(1510), n(7812), n(3110), n(9773);
            },
            7812: function(t, e, n) {
                var o = n(6518), r = n(9297), i = n(757), a = n(6823), s = n(5745), u = n(1296), c = s("symbol-to-string-registry");
                o({
                    target: "Symbol",
                    stat: !0,
                    forced: !u
                }, {
                    keyFor: function(t) {
                        if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
                        if (r(c, t)) return c[t];
                    }
                });
            },
            5700: function(t, e, n) {
                var o = n(511), r = n(8242);
                o("toPrimitive"), r();
            },
            8344: function(t, e, n) {
                n(8543);
            },
            3500: function(t, e, n) {
                var o = n(4475), r = n(7400), i = n(9296), a = n(235), s = n(6699), u = function(t) {
                    if (t && t.forEach !== a) try {
                        s(t, "forEach", a);
                    } catch (e) {
                        t.forEach = a;
                    }
                };
                for(var c in r)r[c] && u(o[c] && o[c].prototype);
                u(i);
            },
            2953: function(t, e, n) {
                var o = n(4475), r = n(7400), i = n(9296), a = n(3792), s = n(6699), u = n(687), c = n(8227)("iterator"), l = a.values, f = function(t, e) {
                    if (t) {
                        if (t[c] !== l) try {
                            s(t, c, l);
                        } catch (e) {
                            t[c] = l;
                        }
                        if (u(t, e, !0), r[e]) {
                            for(var n in a)if (t[n] !== a[n]) try {
                                s(t, n, a[n]);
                            } catch (e) {
                                t[n] = a[n];
                            }
                        }
                    }
                };
                for(var d in r)f(o[d] && o[d].prototype, d);
                f(i, "DOMTokenList");
            }
        }, e = {};
        function n(o) {
            var r = e[o];
            if (void 0 !== r) return r.exports;
            var i = e[o] = {
                exports: {}
            };
            return t[o].call(i.exports, i, i.exports, n), i.exports;
        }
        n.d = function(t, e) {
            for(var o in e)n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        };
        var o = {};
        return function() {
            n.r(o), n.d(o, {
                SimpleKeyboard: function() {
                    return M;
                },
                default: function() {
                    return T;
                }
            });
            n(5276), n(8598), n(4782), n(4554), n(2010), n(7427), n(6099), n(7495), n(8781), n(5440), n(744), n(2762);
            "undefined" == typeof Element || "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this);
            }), "undefined" != typeof self && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(t) {
                if ("Element" in t) {
                    var e = "classList", n = "prototype", o = t.Element[n], r = Object, i = String[n].trim || function() {
                        return this.replace(/^\s+|\s+$/g, "");
                    }, a = Array[n].indexOf || function(t) {
                        for(var e = 0, n = this.length; e < n; e++)if (e in this && this[e] === t) return e;
                        return -1;
                    }, s = function(t, e) {
                        this.name = t, this.code = DOMException[t], this.message = e;
                    }, u = function(t, e) {
                        if ("" === e) throw new s("SYNTAX_ERR", "The token must not be empty.");
                        if (/\s/.test(e)) throw new s("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                        return a.call(t, e);
                    }, c = function(t) {
                        for(var e = i.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, r = n.length; o < r; o++)this.push(n[o]);
                        this._updateClassName = function() {
                            t.setAttribute("class", this.toString());
                        };
                    }, l = c[n] = [], f = function() {
                        return new c(this);
                    };
                    if (s[n] = Error[n], l.item = function(t) {
                        return this[t] || null;
                    }, l.contains = function(t) {
                        return ~u(this, t + "");
                    }, l.add = function() {
                        var t, e = arguments, n = 0, o = e.length, r = !1;
                        do ~u(this, t = e[n] + "") || (this.push(t), r = !0);
                        while (++n < o);
                        r && this._updateClassName();
                    }, l.remove = function() {
                        var t, e, n = arguments, o = 0, r = n.length, i = !1;
                        do for(e = u(this, t = n[o] + ""); ~e;)this.splice(e, 1), i = !0, e = u(this, t);
                        while (++o < r);
                        i && this._updateClassName();
                    }, l.toggle = function(t, e) {
                        var n = this.contains(t), o = n ? !0 !== e && "remove" : !1 !== e && "add";
                        return o && this[o](t), !0 === e || !1 === e ? e : !n;
                    }, l.replace = function(t, e) {
                        var n = u(t + "");
                        ~n && (this.splice(n, 1, e), this._updateClassName());
                    }, l.toString = function() {
                        return this.join(" ");
                    }, r.defineProperty) {
                        var d = {
                            get: f,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            r.defineProperty(o, e, d);
                        } catch (t) {
                            void 0 !== t.number && -2146823252 !== t.number || (d.enumerable = !1, r.defineProperty(o, e, d));
                        }
                    } else r[n].__defineGetter__ && o.__defineGetter__(e, f);
                }
            }(self), function() {
                var t = document.createElement("_");
                if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                    var e = function(t) {
                        var e = DOMTokenList.prototype[t];
                        DOMTokenList.prototype[t] = function(t) {
                            var n, o = arguments.length;
                            for(n = 0; n < o; n++)t = arguments[n], e.call(this, t);
                        };
                    };
                    e("add"), e("remove");
                }
                if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                    var n = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(t, e) {
                        return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
                    };
                }
                "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(t, e) {
                    var n = this.toString().split(" "), o = n.indexOf(t + "");
                    ~o && (n = n.slice(o), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
                }), t = null;
            }());
            n(2675), n(9463), n(2259), n(5700), n(8706), n(2008), n(3418), n(4423), n(3792), n(2062), n(6910), n(9572), n(2892), n(9085), n(3851), n(1278), n(9432), n(4864), n(1699), n(7764), n(8344), n(3500), n(2953), n(2712), n(2637), n(1480), n(1761);
            function t(t) {
                return function(t) {
                    if (Array.isArray(t)) return r(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                }(t) || e(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function e(t, e) {
                if (t) {
                    if ("string" == typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
                }
            }
            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                return o;
            }
            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, i(t);
            }
            function a(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, u(o.key), o);
                }
            }
            function s(t, e, n) {
                return (e = u(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function u(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                }(t, "string");
                return "symbol" == i(e) ? e : String(e);
            }
            var c = function() {
                function n(t) {
                    var e = t.getOptions, o = t.getCaretPosition, r = t.getCaretPositionEnd, i = t.dispatch;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), s(this, "getOptions", void 0), s(this, "getCaretPosition", void 0), s(this, "getCaretPositionEnd", void 0), s(this, "dispatch", void 0), s(this, "maxLengthReached", void 0), s(this, "isStandardButton", function(t) {
                        return t && !("{" === t[0] && "}" === t[t.length - 1]);
                    }), this.getOptions = e, this.getCaretPosition = o, this.getCaretPositionEnd = r, this.dispatch = i, n.bindMethods(n, this);
                }
                var o, r, u;
                return o = n, r = [
                    {
                        key: "getButtonType",
                        value: function(t) {
                            return t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn";
                        }
                    },
                    {
                        key: "getButtonClass",
                        value: function(t) {
                            var e = this.getButtonType(t), n = t.replace("{", "").replace("}", ""), o = "";
                            return "standardBtn" !== e && (o = " hg-button-".concat(n)), "hg-".concat(e).concat(o);
                        }
                    },
                    {
                        key: "getDefaultDiplay",
                        value: function() {
                            return {
                                "{bksp}": "backspace",
                                "{backspace}": "backspace",
                                "{enter}": "< enter",
                                "{shift}": "shift",
                                "{shiftleft}": "shift",
                                "{shiftright}": "shift",
                                "{alt}": "alt",
                                "{s}": "shift",
                                "{tab}": "tab",
                                "{lock}": "caps",
                                "{capslock}": "caps",
                                "{accept}": "Submit",
                                "{space}": " ",
                                "{//}": " ",
                                "{esc}": "esc",
                                "{escape}": "esc",
                                "{f1}": "f1",
                                "{f2}": "f2",
                                "{f3}": "f3",
                                "{f4}": "f4",
                                "{f5}": "f5",
                                "{f6}": "f6",
                                "{f7}": "f7",
                                "{f8}": "f8",
                                "{f9}": "f9",
                                "{f10}": "f10",
                                "{f11}": "f11",
                                "{f12}": "f12",
                                "{numpaddivide}": "/",
                                "{numlock}": "lock",
                                "{arrowup}": "\u2191",
                                "{arrowleft}": "\u2190",
                                "{arrowdown}": "\u2193",
                                "{arrowright}": "\u2192",
                                "{prtscr}": "print",
                                "{scrolllock}": "scroll",
                                "{pause}": "pause",
                                "{insert}": "ins",
                                "{home}": "home",
                                "{pageup}": "up",
                                "{delete}": "del",
                                "{forwarddelete}": "del",
                                "{end}": "end",
                                "{pagedown}": "down",
                                "{numpadmultiply}": "*",
                                "{numpadsubtract}": "-",
                                "{numpadadd}": "+",
                                "{numpadenter}": "enter",
                                "{period}": ".",
                                "{numpaddecimal}": ".",
                                "{numpad0}": "0",
                                "{numpad1}": "1",
                                "{numpad2}": "2",
                                "{numpad3}": "3",
                                "{numpad4}": "4",
                                "{numpad5}": "5",
                                "{numpad6}": "6",
                                "{numpad7}": "7",
                                "{numpad8}": "8",
                                "{numpad9}": "9"
                            };
                        }
                    },
                    {
                        key: "getButtonDisplayName",
                        value: function(t, e) {
                            return (e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
                        }
                    },
                    {
                        key: "getUpdatedInput",
                        value: function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n, r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = this.getOptions(), a = [
                                n,
                                o,
                                r
                            ], s = e;
                            return ("{bksp}" === t || "{backspace}" === t) && s.length > 0 ? s = this.removeAt.apply(this, [
                                s
                            ].concat(a)) : ("{delete}" === t || "{forwarddelete}" === t) && s.length > 0 ? s = this.removeForwardsAt.apply(this, [
                                s
                            ].concat(a)) : "{space}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                " "
                            ].concat(a)) : "{tab}" !== t || "boolean" == typeof i.tabCharOnTab && !1 === i.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !i.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? s = this.addStringAt.apply(this, [
                                s,
                                t[t.length - 2]
                            ].concat(a)) : "{numpaddivide}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                "/"
                            ].concat(a)) : "{numpadmultiply}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                "*"
                            ].concat(a)) : "{numpadsubtract}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                "-"
                            ].concat(a)) : "{numpadadd}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                "+"
                            ].concat(a)) : "{numpaddecimal}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                "."
                            ].concat(a)) : "{" === t || "}" === t ? s = this.addStringAt.apply(this, [
                                s,
                                t
                            ].concat(a)) : t.includes("{") || t.includes("}") || (s = this.addStringAt.apply(this, [
                                s,
                                t
                            ].concat(a))) : s = this.addStringAt.apply(this, [
                                s,
                                "\n"
                            ].concat(a)) : s = this.addStringAt.apply(this, [
                                s,
                                "	"
                            ].concat(a)), i.debug && console.log("Input will be: " + s), s;
                        }
                    },
                    {
                        key: "updateCaretPos",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.updateCaretPosAction(t, e);
                            this.dispatch(function(t) {
                                t.setCaretPosition(n);
                            });
                        }
                    },
                    {
                        key: "updateCaretPosAction",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.getOptions(), o = this.getCaretPosition();
                            return null != o && (e ? o > 0 && (o -= t) : o += t), n.debug && console.log("Caret at:", o), o;
                        }
                    },
                    {
                        key: "addStringAt",
                        value: function(t, e) {
                            var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length, i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                            return o || 0 === o ? (n = [
                                t.slice(0, o),
                                e,
                                t.slice(r)
                            ].join(""), this.isMaxLengthReached() || i && this.updateCaretPos(e.length)) : n = t + e, n;
                        }
                    },
                    {
                        key: "removeAt",
                        value: function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            if (0 === n && 0 === o) return t;
                            if (n === o) {
                                var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                                n && n >= 0 ? t.substring(n - 2, n).match(i) ? (e = t.substr(0, n - 2) + t.substr(n), r && this.updateCaretPos(2, !0)) : (e = t.substr(0, n - 1) + t.substr(n), r && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (e = t.slice(0, -2), r && this.updateCaretPos(2, !0)) : (e = t.slice(0, -1), r && this.updateCaretPos(1, !0));
                            } else e = t.slice(0, n) + t.slice(o), r && this.dispatch(function(t) {
                                t.setCaretPosition(n);
                            });
                            return e;
                        }
                    },
                    {
                        key: "removeForwardsAt",
                        value: function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            return null != t && t.length && null !== n ? (n === o ? e = t.substring(n, n + 2).match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g) ? t.substr(0, n) + t.substr(n + 2) : t.substr(0, n) + t.substr(n + 1) : (e = t.slice(0, n) + t.slice(o), r && this.dispatch(function(t) {
                                t.setCaretPosition(n);
                            })), e) : t;
                        }
                    },
                    {
                        key: "handleMaxLength",
                        value: function(t, e) {
                            var n = this.getOptions(), o = n.maxLength, r = t[n.inputName || "default"], a = e.length - 1 >= o;
                            if (e.length <= r.length) return !1;
                            if (Number.isInteger(o)) return n.debug && console.log("maxLength (num) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                            if ("object" === i(o)) {
                                var s = e.length - 1 >= o[n.inputName || "default"];
                                return n.debug && console.log("maxLength (obj) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                            }
                        }
                    },
                    {
                        key: "isMaxLengthReached",
                        value: function() {
                            return Boolean(this.maxLengthReached);
                        }
                    },
                    {
                        key: "isTouchDevice",
                        value: function() {
                            return "ontouchstart" in window || navigator.maxTouchPoints;
                        }
                    },
                    {
                        key: "pointerEventsSupported",
                        value: function() {
                            return !!window.PointerEvent;
                        }
                    },
                    {
                        key: "camelCase",
                        value: function(t) {
                            return t ? t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t, e) {
                                return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
                            }) : "";
                        }
                    },
                    {
                        key: "chunkArray",
                        value: function(e, n) {
                            return t(Array(Math.ceil(e.length / n))).map(function(t, o) {
                                return e.slice(n * o, n + n * o);
                            });
                        }
                    },
                    {
                        key: "escapeRegex",
                        value: function(t) {
                            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                        }
                    },
                    {
                        key: "getRtlOffset",
                        value: function(t, e) {
                            var n = t, o = e.indexOf("\u202B");
                            return o < t && -1 != o && n--, e.indexOf("\u202C") < t && -1 != o && n--, n < 0 ? 0 : n;
                        }
                    }
                ], u = [
                    {
                        key: "bindMethods",
                        value: function(t, n) {
                            var o, r = function(t, n) {
                                var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!o) {
                                    if (Array.isArray(t) || (o = e(t)) || n && t && "number" == typeof t.length) {
                                        o && (t = o);
                                        var r = 0, i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
                                                };
                                            },
                                            e: function(t) {
                                                throw t;
                                            },
                                            f: i
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var a, s = !0, u = !1;
                                return {
                                    s: function() {
                                        o = o.call(t);
                                    },
                                    n: function() {
                                        var t = o.next();
                                        return s = t.done, t;
                                    },
                                    e: function(t) {
                                        u = !0, a = t;
                                    },
                                    f: function() {
                                        try {
                                            s || null == o.return || o.return();
                                        } finally{
                                            if (u) throw a;
                                        }
                                    }
                                };
                            }(Object.getOwnPropertyNames(t.prototype));
                            try {
                                for(r.s(); !(o = r.n()).done;){
                                    var i = o.value;
                                    "constructor" === i || "bindMethods" === i || (n[i] = n[i].bind(n));
                                }
                            } catch (t) {
                                r.e(t);
                            } finally{
                                r.f();
                            }
                        }
                    }
                ], r && a(o.prototype, r), u && a(o, u), Object.defineProperty(o, "prototype", {
                    writable: !1
                }), n;
            }();
            s(c, "noop", function() {});
            var l = c;
            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, f(t);
            }
            function d(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, h(o.key), o);
                }
            }
            function p(t, e, n) {
                return (e = h(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function h(t) {
                var e = function(t, e) {
                    if ("object" != f(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != f(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                }(t, "string");
                return "symbol" == f(e) ? e : String(e);
            }
            var v = function() {
                function t(e) {
                    var n = this, o = e.dispatch, r = e.getOptions;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), p(this, "getOptions", void 0), p(this, "dispatch", void 0), p(this, "isModifierKey", function(t) {
                        return t.altKey || t.ctrlKey || t.shiftKey || [
                            "Tab",
                            "CapsLock",
                            "Esc",
                            "ArrowUp",
                            "ArrowDown",
                            "ArrowLeft",
                            "ArrowRight"
                        ].includes(t.code || t.key || n.keyCodeToKey(null == t ? void 0 : t.keyCode));
                    }), this.dispatch = o, this.getOptions = r, l.bindMethods(t, this);
                }
                var e, n, o;
                return e = t, n = [
                    {
                        key: "handleHighlightKeyDown",
                        value: function(t) {
                            var e = this.getOptions();
                            e.physicalKeyboardHighlightPreventDefault && this.isModifierKey(t) && (t.preventDefault(), t.stopImmediatePropagation());
                            var n = this.getSimpleKeyboardLayoutKey(t);
                            this.dispatch(function(o) {
                                var r, i, a = o.getButtonElement(n), s = o.getButtonElement("{".concat(n, "}"));
                                if (a) r = a, i = n;
                                else {
                                    if (!s) return;
                                    r = s, i = "{".concat(n, "}");
                                }
                                var u, c, l, f, d = function(t) {
                                    t.style.background = e.physicalKeyboardHighlightBgColor || "#dadce4", t.style.color = e.physicalKeyboardHighlightTextColor || "black";
                                };
                                if (r) {
                                    if (Array.isArray(r)) {
                                        if (r.forEach(function(t) {
                                            return d(t);
                                        }), e.physicalKeyboardHighlightPress) {
                                            if (e.physicalKeyboardHighlightPressUsePointerEvents) null === (u = r[0]) || void 0 === u || null === (c = u.onpointerdown) || void 0 === c || c.call(u, t);
                                            else if (e.physicalKeyboardHighlightPressUseClick) {
                                                var p;
                                                null === (p = r[0]) || void 0 === p || p.click();
                                            } else o.handleButtonClicked(i, t);
                                        }
                                    } else d(r), e.physicalKeyboardHighlightPress && (e.physicalKeyboardHighlightPressUsePointerEvents ? null === (l = r) || void 0 === l || null === (f = l.onpointerdown) || void 0 === f || f.call(l, t) : e.physicalKeyboardHighlightPressUseClick ? r.click() : o.handleButtonClicked(i, t));
                                }
                            });
                        }
                    },
                    {
                        key: "handleHighlightKeyUp",
                        value: function(t) {
                            var e = this.getOptions();
                            e.physicalKeyboardHighlightPreventDefault && this.isModifierKey(t) && (t.preventDefault(), t.stopImmediatePropagation());
                            var n = this.getSimpleKeyboardLayoutKey(t);
                            this.dispatch(function(o) {
                                var r, i, a, s = o.getButtonElement(n) || o.getButtonElement("{".concat(n, "}")), u = function(t) {
                                    t.removeAttribute && t.removeAttribute("style");
                                };
                                s && (Array.isArray(s) ? (s.forEach(function(t) {
                                    return u(t);
                                }), e.physicalKeyboardHighlightPressUsePointerEvents && (null === (r = s[0]) || void 0 === r || null === (i = r.onpointerup) || void 0 === i || i.call(r, t))) : (u(s), e.physicalKeyboardHighlightPressUsePointerEvents && (null == s || null === (a = s.onpointerup) || void 0 === a || a.call(s, t))));
                            });
                        }
                    },
                    {
                        key: "getSimpleKeyboardLayoutKey",
                        value: function(t) {
                            var e, n = "", o = t.code || t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode);
                            return (n = null != o && o.includes("Numpad") || null != o && o.includes("Shift") || null != o && o.includes("Space") || null != o && o.includes("Backspace") || null != o && o.includes("Control") || null != o && o.includes("Alt") || null != o && o.includes("Meta") ? t.code || "" : t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode) || "").length > 1 ? null === (e = n) || void 0 === e ? void 0 : e.toLowerCase() : n;
                        }
                    },
                    {
                        key: "keyCodeToKey",
                        value: function(t) {
                            return ({
                                8: "Backspace",
                                9: "Tab",
                                13: "Enter",
                                16: "Shift",
                                17: "Ctrl",
                                18: "Alt",
                                19: "Pause",
                                20: "CapsLock",
                                27: "Esc",
                                32: "Space",
                                33: "PageUp",
                                34: "PageDown",
                                35: "End",
                                36: "Home",
                                37: "ArrowLeft",
                                38: "ArrowUp",
                                39: "ArrowRight",
                                40: "ArrowDown",
                                45: "Insert",
                                46: "Delete",
                                48: "0",
                                49: "1",
                                50: "2",
                                51: "3",
                                52: "4",
                                53: "5",
                                54: "6",
                                55: "7",
                                56: "8",
                                57: "9",
                                65: "A",
                                66: "B",
                                67: "C",
                                68: "D",
                                69: "E",
                                70: "F",
                                71: "G",
                                72: "H",
                                73: "I",
                                74: "J",
                                75: "K",
                                76: "L",
                                77: "M",
                                78: "N",
                                79: "O",
                                80: "P",
                                81: "Q",
                                82: "R",
                                83: "S",
                                84: "T",
                                85: "U",
                                86: "V",
                                87: "W",
                                88: "X",
                                89: "Y",
                                90: "Z",
                                91: "Meta",
                                96: "Numpad0",
                                97: "Numpad1",
                                98: "Numpad2",
                                99: "Numpad3",
                                100: "Numpad4",
                                101: "Numpad5",
                                102: "Numpad6",
                                103: "Numpad7",
                                104: "Numpad8",
                                105: "Numpad9",
                                106: "NumpadMultiply",
                                107: "NumpadAdd",
                                109: "NumpadSubtract",
                                110: "NumpadDecimal",
                                111: "NumpadDivide",
                                112: "F1",
                                113: "F2",
                                114: "F3",
                                115: "F4",
                                116: "F5",
                                117: "F6",
                                118: "F7",
                                119: "F8",
                                120: "F9",
                                121: "F10",
                                122: "F11",
                                123: "F12",
                                144: "NumLock",
                                145: "ScrollLock",
                                186: ";",
                                187: "=",
                                188: ",",
                                189: "-",
                                190: ".",
                                191: "/",
                                192: "`",
                                219: "[",
                                220: "\\",
                                221: "]",
                                222: "'"
                            })[t] || "";
                        }
                    }
                ], d(e.prototype, n), o && d(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t;
            }();
            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, y(t);
            }
            function g(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, b(o.key), o);
                }
            }
            function m(t, e, n) {
                return (e = b(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function b(t) {
                var e = function(t, e) {
                    if ("object" != y(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != y(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                }(t, "string");
                return "symbol" == y(e) ? e : String(e);
            }
            var x = function() {
                function t(e) {
                    var n = e.utilities, o = e.options;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), m(this, "utilities", void 0), m(this, "options", void 0), m(this, "candidateBoxElement", void 0), m(this, "pageIndex", 0), m(this, "pageSize", void 0), this.utilities = n, this.options = o, l.bindMethods(t, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
                }
                var e, n, o;
                return e = t, n = [
                    {
                        key: "destroy",
                        value: function() {
                            this.candidateBoxElement && (this.candidateBoxElement.remove(), this.pageIndex = 0);
                        }
                    },
                    {
                        key: "show",
                        value: function(t) {
                            var e = this, n = t.candidateValue, o = t.targetElement, r = t.onSelect;
                            if (n && n.length) {
                                var i = this.utilities.chunkArray(n.split(" "), this.pageSize);
                                this.renderPage({
                                    candidateListPages: i,
                                    targetElement: o,
                                    pageIndex: this.pageIndex,
                                    nbPages: i.length,
                                    onItemSelected: function(t, n) {
                                        r(t, n), e.destroy();
                                    }
                                });
                            }
                        }
                    },
                    {
                        key: "renderPage",
                        value: function(t) {
                            var e, n = this, o = t.candidateListPages, r = t.targetElement, i = t.pageIndex, a = t.nbPages, s = t.onItemSelected;
                            null === (e = this.candidateBoxElement) || void 0 === e || e.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
                            var u = document.createElement("ul");
                            u.className = "hg-candidate-box-list", o[i].forEach(function(t) {
                                var e, o = document.createElement("li"), r = function() {
                                    var t = new (n.options.useTouchEvents ? TouchEvent : MouseEvent)("click");
                                    return Object.defineProperty(t, "target", {
                                        value: o
                                    }), t;
                                };
                                o.className = "hg-candidate-box-list-item", o.innerHTML = (null === (e = n.options.display) || void 0 === e ? void 0 : e[t]) || t, n.options.useTouchEvents ? o.ontouchstart = function(e) {
                                    return s(t, e || r());
                                } : o.onclick = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
                                    return s(t, e);
                                }, u.appendChild(o);
                            });
                            var c = i > 0, l = document.createElement("div");
                            l.classList.add("hg-candidate-box-prev"), c && l.classList.add("hg-candidate-box-btn-active");
                            var f = function() {
                                c && n.renderPage({
                                    candidateListPages: o,
                                    targetElement: r,
                                    pageIndex: i - 1,
                                    nbPages: a,
                                    onItemSelected: s
                                });
                            };
                            this.options.useTouchEvents ? l.ontouchstart = f : l.onclick = f, this.candidateBoxElement.appendChild(l), this.candidateBoxElement.appendChild(u);
                            var d = i < a - 1, p = document.createElement("div");
                            p.classList.add("hg-candidate-box-next"), d && p.classList.add("hg-candidate-box-btn-active");
                            var h = function() {
                                d && n.renderPage({
                                    candidateListPages: o,
                                    targetElement: r,
                                    pageIndex: i + 1,
                                    nbPages: a,
                                    onItemSelected: s
                                });
                            };
                            this.options.useTouchEvents ? p.ontouchstart = h : p.onclick = h, this.candidateBoxElement.appendChild(p), r.prepend(this.candidateBoxElement);
                        }
                    }
                ], n && g(e.prototype, n), o && g(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t;
            }(), w = x;
            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return O(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return O(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(t, e);
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                return o;
            }
            function S(t) {
                return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, S(t);
            }
            function k(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function P(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, C(o.key), o);
                }
            }
            function I(t, e, n) {
                return (e = C(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function C(t) {
                var e = function(t, e) {
                    if ("object" != S(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != S(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                }(t, "string");
                return "symbol" == S(e) ? e : String(e);
            }
            var A = function() {
                function t(e, n) {
                    var o = this;
                    if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), I(this, "input", void 0), I(this, "options", void 0), I(this, "utilities", void 0), I(this, "caretPosition", void 0), I(this, "caretPositionEnd", void 0), I(this, "keyboardDOM", void 0), I(this, "keyboardPluginClasses", void 0), I(this, "keyboardDOMClass", void 0), I(this, "buttonElements", void 0), I(this, "currentInstanceName", void 0), I(this, "allKeyboardInstances", void 0), I(this, "keyboardInstanceNames", void 0), I(this, "isFirstKeyboardInstance", void 0), I(this, "physicalKeyboard", void 0), I(this, "modules", void 0), I(this, "activeButtonClass", void 0), I(this, "holdInteractionTimeout", void 0), I(this, "holdTimeout", void 0), I(this, "isMouseHold", void 0), I(this, "initialized", void 0), I(this, "candidateBox", void 0), I(this, "keyboardRowsDOM", void 0), I(this, "defaultName", "default"), I(this, "activeInputElement", null), I(this, "handleParams", function(t, e) {
                        var n, o, r;
                        if ("string" == typeof t) n = t.split(".").join(""), o = document.querySelector(".".concat(n)), r = e;
                        else if (t instanceof HTMLDivElement) {
                            if (!t.className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
                            n = t.className.split(" ")[0], o = t, r = e;
                        } else n = "simple-keyboard", o = document.querySelector(".".concat(n)), r = t;
                        return {
                            keyboardDOMClass: n,
                            keyboardDOM: o,
                            options: r
                        };
                    }), I(this, "getOptions", function() {
                        return o.options;
                    }), I(this, "getCaretPosition", function() {
                        return o.caretPosition;
                    }), I(this, "getCaretPositionEnd", function() {
                        return o.caretPositionEnd;
                    }), I(this, "registerModule", function(t, e) {
                        o.modules[t] || (o.modules[t] = {}), e(o.modules[t]);
                    }), I(this, "getKeyboardClassString", function() {
                        for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
                        return [
                            o.keyboardDOMClass
                        ].concat(e).filter(function(t) {
                            return !!t;
                        }).join(" ");
                    }), "undefined" != typeof window) {
                        var r = this.handleParams(e, n), i = r.keyboardDOMClass, a = r.keyboardDOM, s = r.options, u = void 0 === s ? {} : s;
                        this.utilities = new l({
                            getOptions: this.getOptions,
                            getCaretPosition: this.getCaretPosition,
                            getCaretPositionEnd: this.getCaretPositionEnd,
                            dispatch: this.dispatch
                        }), this.caretPosition = null, this.caretPositionEnd = null, this.keyboardDOM = a, this.options = function(t) {
                            for(var e = 1; e < arguments.length; e++){
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? k(Object(n), !0).forEach(function(e) {
                                    I(t, e, n[e]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                });
                            }
                            return t;
                        }({
                            layoutName: "default",
                            theme: "hg-theme-default",
                            inputName: "default",
                            preventMouseDownDefault: !1,
                            enableLayoutCandidates: !0,
                            excludeFromLayout: {}
                        }, u), this.keyboardPluginClasses = "", l.bindMethods(t, this);
                        var c = this.options.inputName, f = void 0 === c ? this.defaultName : c;
                        if (this.input = {}, this.input[f] = "", this.keyboardDOMClass = i, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new v({
                            dispatch: this.dispatch,
                            getOptions: this.getOptions
                        }), this.candidateBox = this.options.enableLayoutCandidates ? new w({
                            utilities: this.utilities,
                            options: this.options
                        }) : null, !this.keyboardDOM) throw console.warn('".'.concat(i, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
                        this.render(), this.modules = {}, this.loadModules();
                    }
                }
                var e, n, o;
                return e = t, n = [
                    {
                        key: "setCaretPosition",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                            this.caretPosition = t, this.caretPositionEnd = e;
                        }
                    },
                    {
                        key: "getInputCandidates",
                        value: function(t) {
                            var e = this, n = this.options, o = n.layoutCandidates, r = n.layoutCandidatesCaseSensitiveMatch;
                            if (!o || "object" !== S(o)) return {};
                            var i = Object.keys(o).filter(function(n) {
                                var o = t.substring(0, e.getCaretPositionEnd() || 0) || t, i = new RegExp("".concat(e.utilities.escapeRegex(n), "$"), r ? "g" : "gi");
                                return !!E(o.matchAll(i)).length;
                            });
                            if (i.length > 1) {
                                var a = i.sort(function(t, e) {
                                    return e.length - t.length;
                                })[0];
                                return {
                                    candidateKey: a,
                                    candidateValue: o[a]
                                };
                            }
                            if (i.length) {
                                var s = i[0];
                                return {
                                    candidateKey: s,
                                    candidateValue: o[s]
                                };
                            }
                            return {};
                        }
                    },
                    {
                        key: "showCandidatesBox",
                        value: function(t, e, n) {
                            var o = this;
                            this.candidateBox && this.candidateBox.show({
                                candidateValue: e,
                                targetElement: n,
                                onSelect: function(e, n) {
                                    var r = o.options, i = r.layoutCandidatesCaseSensitiveMatch, a = r.disableCandidateNormalization, s = r.enableLayoutCandidatesKeyPress, u = e;
                                    a || (u = e.normalize("NFD"));
                                    var c = o.getInput(o.options.inputName, !0), l = o.getCaretPositionEnd() || 0, f = c.substring(0, l || 0) || c, d = new RegExp("".concat(o.utilities.escapeRegex(t), "$"), i ? "g" : "gi"), p = f.replace(d, u), h = c.replace(f, p), v = p.length - f.length, y = (l || c.length) + v;
                                    y < 0 && (y = 0), o.setInput(h, o.options.inputName, !0), o.setCaretPosition(y), s && "function" == typeof o.options.onKeyPress && o.options.onKeyPress(e, n), "function" == typeof o.options.onChange && o.options.onChange(o.getInput(o.options.inputName, !0), n), "function" == typeof o.options.onChangeAll && o.options.onChangeAll(o.getAllInputs(), n);
                                }
                            });
                        }
                    },
                    {
                        key: "handleButtonClicked",
                        value: function(t, e) {
                            var n = this.options, o = n.inputName, r = void 0 === o ? this.defaultName : o, i = n.debug;
                            if ("{//}" !== t) {
                                this.input[r] || (this.input[r] = "");
                                var a = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd);
                                if (this.utilities.isStandardButton(t) && this.activeInputElement && this.input[r] && this.input[r] === a && 0 === this.caretPosition && this.caretPositionEnd === a.length) return this.setInput("", this.options.inputName, !0), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(t, e);
                                if ("function" == typeof this.options.onKeyPress && this.options.onKeyPress(t, e), this.input[r] !== a && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(a))) {
                                    if (this.options.maxLength && this.utilities.handleMaxLength(this.input, a)) return;
                                    var s = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd, !0);
                                    if (this.setInput(s, this.options.inputName, !0), i && console.log("Input changed:", this.getAllInputs()), this.options.debug && console.log("Caret at: ", this.getCaretPosition(), this.getCaretPositionEnd(), "(".concat(this.keyboardDOMClass, ")"), null == e ? void 0 : e.type), this.options.syncInstanceInputs && this.syncInstanceInputs(), "function" == typeof this.options.onChange && this.options.onChange(this.getInput(this.options.inputName, !0), e), "function" == typeof this.options.onChangeAll && this.options.onChangeAll(this.getAllInputs(), e), null != e && e.target && this.options.enableLayoutCandidates) {
                                        var u, c = this.getInputCandidates(a), l = c.candidateKey, f = c.candidateValue;
                                        l && f ? this.showCandidatesBox(l, f, this.keyboardDOM) : null === (u = this.candidateBox) || void 0 === u || u.destroy();
                                    }
                                }
                                this.caretPositionEnd && this.caretPosition !== this.caretPositionEnd && (this.setCaretPosition(this.caretPositionEnd, this.caretPositionEnd), this.activeInputElement && this.activeInputElement.setSelectionRange(this.caretPositionEnd, this.caretPositionEnd), this.options.debug && console.log("Caret position aligned", this.caretPosition)), i && console.log("Key pressed:", t);
                            }
                        }
                    },
                    {
                        key: "getMouseHold",
                        value: function() {
                            return this.isMouseHold;
                        }
                    },
                    {
                        key: "setMouseHold",
                        value: function(t) {
                            this.options.syncInstanceInputs ? this.dispatch(function(e) {
                                e.isMouseHold = t;
                            }) : this.isMouseHold = t;
                        }
                    },
                    {
                        key: "handleButtonMouseDown",
                        value: function(t, e) {
                            var n = this;
                            e && (this.options.preventMouseDownDefault && e.preventDefault(), this.options.stopMouseDownPropagation && e.stopPropagation(), e.target.classList.add(this.activeButtonClass)), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.setMouseHold(!0), this.options.disableButtonHold || (this.holdTimeout = window.setTimeout(function() {
                                (n.getMouseHold() && (!t.includes("{") && !t.includes("}") || "{delete}" === t || "{backspace}" === t || "{bksp}" === t || "{space}" === t || "{tab}" === t) || "{arrowright}" === t || "{arrowleft}" === t || "{arrowup}" === t || "{arrowdown}" === t) && (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t)), clearTimeout(n.holdTimeout);
                            }, 500));
                        }
                    },
                    {
                        key: "handleButtonMouseUp",
                        value: function(t, e) {
                            var n = this;
                            e && (this.options.preventMouseUpDefault && e.preventDefault && e.preventDefault(), this.options.stopMouseUpPropagation && e.stopPropagation && e.stopPropagation(), !(e.target === this.keyboardDOM || e.target && this.keyboardDOM.contains(e.target) || this.candidateBox && this.candidateBox.candidateBoxElement && (e.target === this.candidateBox.candidateBoxElement || e.target && this.candidateBox.candidateBoxElement.contains(e.target))) && this.candidateBox && this.candidateBox.destroy()), this.recurseButtons(function(t) {
                                t.classList.remove(n.activeButtonClass);
                            }), this.setMouseHold(!1), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), t && "function" == typeof this.options.onKeyReleased && this.options.onKeyReleased(t, e);
                        }
                    },
                    {
                        key: "handleKeyboardContainerMouseDown",
                        value: function(t) {
                            this.options.preventMouseDownDefault && t.preventDefault();
                        }
                    },
                    {
                        key: "handleButtonHold",
                        value: function(t) {
                            var e = this;
                            this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = window.setTimeout(function() {
                                e.getMouseHold() ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
                            }, 100);
                        }
                    },
                    {
                        key: "syncInstanceInputs",
                        value: function() {
                            var t = this;
                            this.dispatch(function(e) {
                                e.replaceInput(t.input), e.setCaretPosition(t.caretPosition, t.caretPositionEnd);
                            });
                        }
                    },
                    {
                        key: "clearInput",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName;
                            this.input[t] = "", this.setCaretPosition(0), this.options.syncInstanceInputs && this.syncInstanceInputs();
                        }
                    },
                    {
                        key: "getInput",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.options.syncInstanceInputs && !e && this.syncInstanceInputs(), this.options.rtl ? "\u202B" + this.input[t].replace("\u202B", "").replace("\u202C", "") + "\u202C" : this.input[t];
                        }
                    },
                    {
                        key: "getAllInputs",
                        value: function() {
                            var t = this, e = {};
                            return Object.keys(this.input).forEach(function(n) {
                                e[n] = t.getInput(n, !0);
                            }), e;
                        }
                    },
                    {
                        key: "setInput",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.inputName || this.defaultName, n = arguments.length > 2 ? arguments[2] : void 0;
                            this.input[e] = t, !n && this.options.syncInstanceInputs && this.syncInstanceInputs();
                        }
                    },
                    {
                        key: "replaceInput",
                        value: function(t) {
                            this.input = t;
                        }
                    },
                    {
                        key: "setOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this.changedOptions(t);
                            this.options = Object.assign(this.options, t), e.length && (this.options.debug && console.log("changedOptions", e), this.onSetOptions(e), this.render());
                        }
                    },
                    {
                        key: "changedOptions",
                        value: function(t) {
                            var e = this;
                            return Object.keys(t).filter(function(n) {
                                return JSON.stringify(t[n]) !== JSON.stringify(e.options[n]);
                            });
                        }
                    },
                    {
                        key: "onSetOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            t.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (t.includes("layoutCandidatesPageSize") || t.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new w({
                                utilities: this.utilities,
                                options: this.options
                            }));
                        }
                    },
                    {
                        key: "resetRows",
                        value: function() {
                            this.keyboardRowsDOM && this.keyboardRowsDOM.remove(), this.keyboardDOM.className = this.keyboardDOMClass, this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.buttonElements = {};
                        }
                    },
                    {
                        key: "dispatch",
                        value: function(t) {
                            if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
                            return Object.keys(window.SimpleKeyboardInstances).forEach(function(e) {
                                t(window.SimpleKeyboardInstances[e], e);
                            });
                        }
                    },
                    {
                        key: "addButtonTheme",
                        value: function(t, e) {
                            var n = this;
                            e && t && (t.split(" ").forEach(function(o) {
                                e.split(" ").forEach(function(e) {
                                    n.options.buttonTheme || (n.options.buttonTheme = []);
                                    var r = !1;
                                    n.options.buttonTheme.map(function(t) {
                                        if (null != t && t.class.split(" ").includes(e)) {
                                            r = !0;
                                            var n = t.buttons.split(" ");
                                            n.includes(o) || (r = !0, n.push(o), t.buttons = n.join(" "));
                                        }
                                        return t;
                                    }), r || n.options.buttonTheme.push({
                                        class: e,
                                        buttons: t
                                    });
                                });
                            }), this.render());
                        }
                    },
                    {
                        key: "removeButtonTheme",
                        value: function(t, e) {
                            var n = this;
                            if (!t && !e) return this.options.buttonTheme = [], void this.render();
                            t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function(t) {
                                var o;
                                null === (o = n.options) || void 0 === o || null === (o = o.buttonTheme) || void 0 === o || o.map(function(o, r) {
                                    if (o && e && e.includes(o.class) || !e) {
                                        var i, a, s = null === (i = o) || void 0 === i ? void 0 : i.buttons.split(" ").filter(function(e) {
                                            return e !== t;
                                        });
                                        o && null != s && s.length ? o.buttons = s.join(" ") : (null === (a = n.options.buttonTheme) || void 0 === a || a.splice(r, 1), o = null);
                                    }
                                    return o;
                                });
                            }), this.render());
                        }
                    },
                    {
                        key: "getButtonElement",
                        value: function(t) {
                            var e, n = this.buttonElements[t];
                            return n && (e = n.length > 1 ? n : n[0]), e;
                        }
                    },
                    {
                        key: "inputPatternIsValid",
                        value: function(t) {
                            var e, n = this.options.inputPattern;
                            if ((e = n instanceof RegExp ? n : n[this.options.inputName || this.defaultName]) && t) {
                                var o = e.test(t);
                                return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(o ? "passed" : "did not pass!")), o;
                            }
                            return !0;
                        }
                    },
                    {
                        key: "setEventListeners",
                        value: function() {
                            if (this.isFirstKeyboardInstance || !this.allKeyboardInstances) {
                                this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")"));
                                var t = this.options.physicalKeyboardHighlightPreventDefault, e = void 0 !== t && t;
                                document.addEventListener("keyup", this.handleKeyUp, e), document.addEventListener("keydown", this.handleKeyDown, e), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd), document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("select", this.handleSelect);
                            }
                        }
                    },
                    {
                        key: "handleKeyUp",
                        value: function(t) {
                            this.caretEventHandler(t), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(t);
                        }
                    },
                    {
                        key: "handleKeyDown",
                        value: function(t) {
                            this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(t);
                        }
                    },
                    {
                        key: "handleMouseUp",
                        value: function(t) {
                            this.caretEventHandler(t);
                        }
                    },
                    {
                        key: "handleTouchEnd",
                        value: function(t) {
                            this.caretEventHandler(t);
                        }
                    },
                    {
                        key: "handleSelect",
                        value: function(t) {
                            this.caretEventHandler(t);
                        }
                    },
                    {
                        key: "handleSelectionChange",
                        value: function(t) {
                            navigator.userAgent.includes("Firefox") || this.caretEventHandler(t);
                        }
                    },
                    {
                        key: "caretEventHandler",
                        value: function(t) {
                            var e, n = this;
                            t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function(o) {
                                var r = t.target === o.keyboardDOM || t.target && o.keyboardDOM.contains(t.target);
                                if (n.options.syncInstanceInputs && Array.isArray(t.path) && (r = t.path.some(function(t) {
                                    var e;
                                    return null == t || null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-skInstance");
                                })), ("textarea" === e || "input" === e && [
                                    "text",
                                    "search",
                                    "url",
                                    "tel",
                                    "password"
                                ].includes(t.target.type)) && !o.options.disableCaretPositioning) {
                                    var i = t.target.selectionStart, a = t.target.selectionEnd;
                                    o.options.rtl && (i = o.utilities.getRtlOffset(i, o.getInput()), a = o.utilities.getRtlOffset(a, o.getInput())), o.setCaretPosition(i, a), n.activeInputElement = t.target, o.options.debug && console.log("Caret at: ", o.getCaretPosition(), o.getCaretPositionEnd(), t && t.target.tagName.toLowerCase(), "(".concat(o.keyboardDOMClass, ")"), null == t ? void 0 : t.type);
                                } else !o.options.disableCaretPositioning && r || "selectionchange" === (null == t ? void 0 : t.type) || (o.setCaretPosition(null), n.activeInputElement = null, o.options.debug && console.log('Caret position reset due to "'.concat(null == t ? void 0 : t.type, '" event'), t));
                            });
                        }
                    },
                    {
                        key: "recurseButtons",
                        value: function(t) {
                            var e = this;
                            t && Object.keys(this.buttonElements).forEach(function(n) {
                                return e.buttonElements[n].forEach(t);
                            });
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName));
                            var t = this.options.physicalKeyboardHighlightPreventDefault, e = void 0 !== t && t;
                            document.removeEventListener("keyup", this.handleKeyUp, e), document.removeEventListener("keydown", this.handleKeyDown, e), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("select", this.handleSelect), document.removeEventListener("selectionchange", this.handleSelectionChange), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null, this.recurseButtons(function(t) {
                                t && (t.onpointerdown = null, t.onpointerup = null, t.onpointercancel = null, t.ontouchstart = null, t.ontouchend = null, t.ontouchcancel = null, t.onclick = null, t.onmousedown = null, t.onmouseup = null, t.remove(), t = null);
                            }), this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.resetRows(), this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = null), this.activeInputElement = null, this.keyboardDOM.removeAttribute("data-skInstance"), this.keyboardDOM.innerHTML = "", window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = !1;
                        }
                    },
                    {
                        key: "getButtonThemeClasses",
                        value: function(t) {
                            var e = this.options.buttonTheme, n = [];
                            return Array.isArray(e) && e.forEach(function(e) {
                                if (e && e.class && "string" == typeof e.class && e.buttons && "string" == typeof e.buttons) {
                                    var o = e.class.split(" ");
                                    e.buttons.split(" ").includes(t) && (n = [].concat(E(n), E(o)));
                                } else console.warn('Incorrect "buttonTheme". Please check the documentation.', e);
                            }), n;
                        }
                    },
                    {
                        key: "setDOMButtonAttributes",
                        value: function(t, e) {
                            var n = this.options.buttonAttributes;
                            Array.isArray(n) && n.forEach(function(n) {
                                n.attribute && "string" == typeof n.attribute && n.value && "string" == typeof n.value && n.buttons && "string" == typeof n.buttons ? n.buttons.split(" ").includes(t) && e(n.attribute, n.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', n);
                            });
                        }
                    },
                    {
                        key: "onTouchDeviceDetected",
                        value: function() {
                            this.processAutoTouchEvents(), this.disableContextualWindow();
                        }
                    },
                    {
                        key: "disableContextualWindow",
                        value: function() {
                            window.oncontextmenu = function(t) {
                                if (t.target.classList.contains("hg-button")) return t.preventDefault(), t.stopPropagation(), !1;
                            };
                        }
                    },
                    {
                        key: "processAutoTouchEvents",
                        value: function() {
                            this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
                        }
                    },
                    {
                        key: "onInit",
                        value: function() {
                            this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), "function" == typeof this.options.onInit && this.options.onInit(this);
                        }
                    },
                    {
                        key: "beforeFirstRender",
                        value: function() {
                            this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" == typeof this.options.beforeFirstRender && this.options.beforeFirstRender(this), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
                        }
                    },
                    {
                        key: "beforeRender",
                        value: function() {
                            "function" == typeof this.options.beforeRender && this.options.beforeRender(this);
                        }
                    },
                    {
                        key: "onRender",
                        value: function() {
                            "function" == typeof this.options.onRender && this.options.onRender(this);
                        }
                    },
                    {
                        key: "onModulesLoaded",
                        value: function() {
                            "function" == typeof this.options.onModulesLoaded && this.options.onModulesLoaded(this);
                        }
                    },
                    {
                        key: "loadModules",
                        value: function() {
                            var t = this;
                            Array.isArray(this.options.modules) && (this.options.modules.forEach(function(e) {
                                var n = new e(t);
                                n.init && n.init(t);
                            }), this.keyboardPluginClasses = "modules-loaded", this.render(), this.onModulesLoaded());
                        }
                    },
                    {
                        key: "getModuleProp",
                        value: function(t, e) {
                            return !!this.modules[t] && this.modules[t][e];
                        }
                    },
                    {
                        key: "getModulesList",
                        value: function() {
                            return Object.keys(this.modules);
                        }
                    },
                    {
                        key: "parseRowDOMContainers",
                        value: function(t, e, n, o) {
                            var r = this, i = Array.from(t.children), a = 0;
                            return i.length && n.forEach(function(n, s) {
                                var u = o[s];
                                if (!(u && u > n)) return !1;
                                var c = n - a, l = u - a, f = document.createElement("div");
                                f.className += "hg-button-container";
                                var d = "".concat(r.options.layoutName, "-r").concat(e, "c").concat(s);
                                f.setAttribute("data-skUID", d);
                                var p = i.splice(c, l - c + 1);
                                a = l - c, p.forEach(function(t) {
                                    return f.appendChild(t);
                                }), i.splice(c, 0, f), t.innerHTML = "", i.forEach(function(e) {
                                    return t.appendChild(e);
                                }), r.options.debug && console.log("rowDOMContainer", p, c, l, a + 1);
                            }), t;
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.resetRows(), this.initialized || this.beforeFirstRender(), this.beforeRender();
                            var e = "hg-layout-".concat(this.options.layoutName), n = this.options.layout || {
                                default: [
                                    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                                    "{tab} q w e r t y u i o p [ ] \\",
                                    "{lock} a s d f g h j k l ; ' {enter}",
                                    "{shift} z x c v b n m , . / {shift}",
                                    ".com @ {space}"
                                ],
                                shift: [
                                    "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                                    "{tab} Q W E R T Y U I O P { } |",
                                    '{lock} A S D F G H J K L : " {enter}',
                                    "{shift} Z X C V B N M < > ? {shift}",
                                    ".com @ {space}"
                                ]
                            }, o = this.options.useTouchEvents || !1, r = o ? "hg-touch-events" : "", i = this.options.useMouseEvents || !1, a = this.options.disableRowButtonContainers;
                            this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, e, this.keyboardPluginClasses, r), this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", n[this.options.layoutName || this.defaultName].forEach(function(e, n) {
                                var r = e.split(" ");
                                t.options.excludeFromLayout && t.options.excludeFromLayout[t.options.layoutName || t.defaultName] && (r = r.filter(function(e) {
                                    return t.options.excludeFromLayout && !t.options.excludeFromLayout[t.options.layoutName || t.defaultName].includes(e);
                                }));
                                var s = document.createElement("div");
                                s.className += "hg-row";
                                var u = [], c = [];
                                r.forEach(function(e, r) {
                                    var l, f = !a && "string" == typeof e && e.length > 1 && 0 === e.indexOf("["), d = !a && "string" == typeof e && e.length > 1 && e.indexOf("]") === e.length - 1;
                                    f && (u.push(r), e = e.replace(/\[/g, "")), d && (c.push(r), e = e.replace(/\]/g, ""));
                                    var p = t.utilities.getButtonClass(e), h = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay), v = t.options.useButtonTag ? "button" : "div", y = document.createElement(v);
                                    y.className += "hg-button ".concat(p), (l = y.classList).add.apply(l, E(t.getButtonThemeClasses(e))), t.setDOMButtonAttributes(e, function(t, e) {
                                        y.setAttribute(t, e);
                                    }), t.activeButtonClass = "hg-activeButton", !t.utilities.pointerEventsSupported() || o || i ? o ? (y.ontouchstart = function(n) {
                                        t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                                    }, y.ontouchend = function(n) {
                                        t.handleButtonMouseUp(e, n);
                                    }, y.ontouchcancel = function(n) {
                                        t.handleButtonMouseUp(e, n);
                                    }) : (y.onclick = function(n) {
                                        t.setMouseHold(!1), "function" != typeof t.options.onKeyReleased && t.handleButtonClicked(e, n);
                                    }, y.onmousedown = function(n) {
                                        "function" != typeof t.options.onKeyReleased || t.isMouseHold || t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                                    }, y.onmouseup = function(n) {
                                        t.handleButtonMouseUp(e, n);
                                    }) : (y.onpointerdown = function(n) {
                                        t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                                    }, y.onpointerup = function(n) {
                                        t.handleButtonMouseUp(e, n);
                                    }, y.onpointercancel = function(n) {
                                        t.handleButtonMouseUp(e, n);
                                    }), y.setAttribute("data-skBtn", e);
                                    var g = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(r);
                                    y.setAttribute("data-skBtnUID", g);
                                    var m = document.createElement("span");
                                    m.innerHTML = h, y.appendChild(m), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(y), s.appendChild(y);
                                }), s = t.parseRowDOMContainers(s, n, u, c), t.keyboardRowsDOM.appendChild(s);
                            }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || o || i ? o ? (document.ontouchend = function(e) {
                                return t.handleButtonMouseUp(void 0, e);
                            }, document.ontouchcancel = function(e) {
                                return t.handleButtonMouseUp(void 0, e);
                            }, this.keyboardDOM.ontouchstart = function(e) {
                                return t.handleKeyboardContainerMouseDown(e);
                            }) : o || (document.onmouseup = function(e) {
                                return t.handleButtonMouseUp(void 0, e);
                            }, this.keyboardDOM.onmousedown = function(e) {
                                return t.handleKeyboardContainerMouseDown(e);
                            }) : (document.onpointerup = function(e) {
                                return t.handleButtonMouseUp(void 0, e);
                            }, this.keyboardDOM.onpointerdown = function(e) {
                                return t.handleKeyboardContainerMouseDown(e);
                            }), this.onInit());
                        }
                    }
                ], n && P(e.prototype, n), o && P(e, o), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t;
            }(), M = A, T = A;
        }(), o;
    }();
});

},{}],"kATyj":[function() {},{}],"i1HU5":[function(require,module,exports) {
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "Collapse", ()=>Collapse);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown);
parcelHelpers.export(exports, "Modal", ()=>Modal);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas);
parcelHelpers.export(exports, "Popover", ()=>Popover);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy);
parcelHelpers.export(exports, "Tab", ()=>Tab);
parcelHelpers.export(exports, "Toast", ()=>Toast);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const elementMap = new Map();
const Data = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element);
        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = "transitionend";
/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */ const parseSelector = (selector)=>{
    if (selector && window.CSS && window.CSS.escape) // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id)=>`#${CSS.escape(id)}`);
    return selector;
};
// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const getElement = (object)=>{
    // it's a jQuery object or a node element
    if (isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
    return null;
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
    // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of DOMContentLoadedCallbacks)callback();
        });
        DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const isRTL = ()=>document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback)=>{
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * Private methods
 */ function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent))if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const [keyHandlers, event] of Object.entries(storeElementEvent)){
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
        }), args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const [property, expectedTypes] of Object.entries(configTypes)){
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const VERSION = "5.3.3";
/**
 * Class definition
 */ class BaseComponent extends Config {
    constructor(element, config){
        super();
        element = getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    // Static
    static getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href");
        // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
        // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel)=>parseSelector(sel)).join(",") : null;
};
const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement (element) {
        const selector = getSelector(element);
        if (selector) return SelectorEngine.findOne(selector) ? selector : null;
        return null;
    },
    getElementFromSelector (element) {
        const selector = getSelector(element);
        return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector (element) {
        const selector = getSelector(element);
        return selector ? SelectorEngine.find(selector) : [];
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = "hide")=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target);
        // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$f = "alert";
const DATA_KEY$a = "bs.alert";
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = "fade";
const CLASS_NAME_SHOW$8 = "show";
/**
 * Class definition
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$f;
    }
    // Public
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Alert, "close");
/**
 * jQuery
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$e = "button";
const DATA_KEY$9 = "bs.button";
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = ".data-api";
const CLASS_NAME_ACTIVE$3 = "active";
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$e;
    }
    // Public
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === "toggle") data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$d = "swipe";
const EVENT_KEY$9 = ".bs.swipe";
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SWIPE_THRESHOLD = 40;
const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class Swipe extends Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    // Getters
    static get Default() {
        return Default$c;
    }
    static get DefaultType() {
        return DefaultType$c;
    }
    static get NAME() {
        return NAME$d;
    }
    // Public
    dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>this._move(event));
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$c = "carousel";
const DATA_KEY$8 = "bs.carousel";
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = ".data-api";
const ARROW_LEFT_KEY$1 = "ArrowLeft";
const ARROW_RIGHT_KEY$1 = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE$2 = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class Carousel extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
    }
    // Getters
    static get Default() {
        return Default$b;
    }
    static get DefaultType() {
        return DefaultType$b;
    }
    static get NAME() {
        return NAME$c;
    }
    // Public
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause() {
        if (this._isSliding) triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            EventHandler.on(this._element, EVENT_MOUSEENTER$1, ()=>this.pause());
            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element))EventHandler.on(img, EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === ORDER_NEXT;
        const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels)Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$b = "collapse";
const DATA_KEY$7 = "bs.collapse";
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = ".data-api";
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_COLLAPSED = "collapsed";
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const WIDTH = "width";
const HEIGHT = "height";
const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
    parent: null,
    toggle: true
};
const DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class Collapse extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = SelectorEngine.getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    // Getters
    static get Default() {
        return Default$a;
    }
    static get DefaultType() {
        return DefaultType$a;
    }
    static get NAME() {
        return NAME$b;
    }
    // Public
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = [];
        // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>Collapse.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = SelectorEngine.getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        // remove children if greater depth
        return SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    // Static
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$a = "dropdown";
const DATA_KEY$6 = "bs.dropdown";
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = ".data-api";
const ESCAPE_KEY$2 = "Escape";
const TAB_KEY$1 = "Tab";
const ARROW_UP_KEY$1 = "ArrowUp";
const ARROW_DOWN_KEY$1 = "ArrowDown";
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = "show";
const CLASS_NAME_DROPUP = "dropup";
const CLASS_NAME_DROPEND = "dropend";
const CLASS_NAME_DROPSTART = "dropstart";
const CLASS_NAME_DROPUP_CENTER = "dropup-center";
const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = ".dropdown-menu";
const SELECTOR_NAVBAR = ".navbar";
const SELECTOR_NAVBAR_NAV = ".navbar-nav";
const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
const PLACEMENT_TOPCENTER = "top";
const PLACEMENT_BOTTOMCENTER = "bottom";
const Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class Dropdown extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
        return Default$9;
    }
    static get DefaultType() {
        return DefaultType$9;
    }
    static get NAME() {
        return NAME$a;
    }
    // Public
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper();
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    // Private
    _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute("aria-expanded", "false");
        Manipulator.removeDataAttribute(this._menu, "popper");
        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
        // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        };
        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            Manipulator.setDataAttribute(this._menu, "popper", "static"); // TODO: v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _selectMenuItem({ key, target }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>isVisible(element));
        if (!items.length) return;
        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
        const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            ARROW_UP_KEY$1,
            ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault();
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$9 = "backdrop";
const CLASS_NAME_FADE$4 = "fade";
const CLASS_NAME_SHOW$5 = "show";
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body" // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
/**
 * Class definition
 */ class Backdrop extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    // Getters
    static get Default() {
        return Default$8;
    }
    static get DefaultType() {
        return DefaultType$8;
    }
    static get NAME() {
        return NAME$9;
    }
    // Public
    show(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) reflow(element);
        element.classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    // Private
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler.on(element, EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$8 = "focustrap";
const DATA_KEY$5 = "bs.focustrap";
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = "Tab";
const TAB_NAV_FORWARD = "forward";
const TAB_NAV_BACKWARD = "backward";
const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
};
/**
 * Class definition
 */ class FocusTrap extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
        return Default$7;
    }
    static get DefaultType() {
        return DefaultType$7;
    }
    static get NAME() {
        return NAME$8;
    }
    // Public
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
        const { trapElement } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
/**
 * Class definition
 */ class ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    // Public
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow();
        // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow");
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow");
        this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProperty);
            // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$7 = "modal";
const DATA_KEY$4 = "bs.modal";
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = ".data-api";
const ESCAPE_KEY$1 = "Escape";
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = "modal-open";
const CLASS_NAME_FADE$3 = "fade";
const CLASS_NAME_SHOW$4 = "show";
const CLASS_NAME_STATIC = "modal-static";
const OPEN_SELECTOR$1 = ".modal.show";
const SELECTOR_DIALOG = ".modal-dialog";
const SELECTOR_MODAL_BODY = ".modal-body";
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
/**
 * Class definition
 */ class Modal extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default$6;
    }
    static get DefaultType() {
        return DefaultType$6;
    }
    static get NAME() {
        return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        EventHandler.off(window, EVENT_KEY$4);
        EventHandler.off(this._dialog, EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
        return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY;
        // return if the following background transition hasn't yet completed
        if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = "hidden";
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove(CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property = isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$4, ()=>{
            if (isVisible(this)) this.focus();
        });
    });
    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$6 = "offcanvas";
const DATA_KEY$3 = "bs.offcanvas";
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = ".data-api";
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = "Escape";
const CLASS_NAME_SHOW$3 = "show";
const CLASS_NAME_SHOWING$1 = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const OPEN_SELECTOR = ".offcanvas.show";
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
/**
 * Class definition
 */ class Offcanvas extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default$5;
    }
    static get DefaultType() {
        return DefaultType$5;
    }
    static get NAME() {
        return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add(CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add(CLASS_NAME_SHOW$3);
            this._element.classList.remove(CLASS_NAME_SHOWING$1);
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add(CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    // Private
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === "static") {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        };
        // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== ESCAPE_KEY) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        });
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    });
    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(selector).show();
});
EventHandler.on(window, EVENT_RESIZE, ()=>{
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ // js-docs-start allow-list
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
// js-docs-end allow-list
const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */ // eslint-disable-next-line unicorn/better-regex
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$5 = "TemplateFactory";
const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class TemplateFactory extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
        return Default$4;
    }
    static get DefaultType() {
        return DefaultType$4;
    }
    static get NAME() {
        return NAME$5;
    }
    // Public
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    // Private
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector,
            entry: content
        }, DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return execute(arg, [
            this
        ]);
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$4 = "tooltip";
const DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const CLASS_NAME_FADE$2 = "fade";
const CLASS_NAME_MODAL = "modal";
const CLASS_NAME_SHOW$2 = "show";
const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = "hide.bs.modal";
const TRIGGER_HOVER = "hover";
const TRIGGER_FOCUS = "focus";
const TRIGGER_CLICK = "click";
const TRIGGER_MANUAL = "manual";
const EVENT_HIDE$2 = "hide";
const EVENT_HIDDEN$2 = "hidden";
const EVENT_SHOW$2 = "show";
const EVENT_SHOWN$2 = "shown";
const EVENT_INSERTED = "inserted";
const EVENT_CLICK$1 = "click";
const EVENT_FOCUSIN$1 = "focusin";
const EVENT_FOCUSOUT$1 = "focusout";
const EVENT_MOUSEENTER = "mouseenter";
const EVENT_MOUSELEAVE = "mouseleave";
const AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
};
const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        6
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class Tooltip extends BaseComponent {
    constructor(element, config){
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config);
        // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null;
        // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    // Getters
    static get Default() {
        return Default$3;
    }
    static get DefaultType() {
        return DefaultType$3;
    }
    static get NAME() {
        return NAME$4;
    }
    // Public
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
        // TODO: v6 remove this or make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        const complete = ()=>{
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    // Protected
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml();
        // TODO: remove this check in v6
        if (!tip) return null;
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        // TODO: v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = getUID(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new TemplateFactory({
            ...this._config,
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = execute(this._config.placement, [
            this,
            tip,
            this._element
        ]);
        const attachment = AttachmentMap[placement.toUpperCase()];
        return _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return execute(arg, [
            this._element
        ]);
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                    context._enter();
                });
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for (const [key, value] of Object.entries(this._config))if (this.constructor.Default[key] !== value) config[key] = value;
        config.selector = false;
        config.trigger = "manual";
        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$3 = "popover";
const SELECTOR_TITLE = ".popover-header";
const SELECTOR_CONTENT = ".popover-body";
const Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [
        0,
        8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
};
/**
 * Class definition
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    static get NAME() {
        return NAME$3;
    }
    // Overrides
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
        return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$2 = "scrollspy";
const DATA_KEY$2 = "bs.scrollspy";
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = ".data-api";
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const CLASS_NAME_ACTIVE$1 = "active";
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = "[href]";
const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const SELECTOR_NAV_LINKS = ".nav-link";
const SELECTOR_NAV_ITEMS = ".nav-item";
const SELECTOR_LIST_ITEMS = ".list-group-item";
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = ".dropdown";
const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
/**
 * Class definition
 */ class ScrollSpy extends BaseComponent {
    constructor(element, config){
        super(element, config);
        // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    // Getters
    static get Default() {
        return Default$1;
    }
    static get DefaultType() {
        return DefaultType$1;
    }
    static get NAME() {
        return NAME$2;
    }
    // Public
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = getElement(config.target) || document.body;
        // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
        // unregister any previous listeners
        EventHandler.off(this._config.target, EVENT_CLICK);
        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                    return;
                }
                // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry);
                // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            }
            // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || isDisabled(anchor)) continue;
            const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
            // ensure that the observableSection exists & is visible
            if (isVisible(observableSection)) {
                this._targetLinks.set(decodeURI(anchor.hash), anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add(CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove(CLASS_NAME_ACTIVE$1);
        const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$1 = "tab";
const DATA_KEY$1 = "bs.tab";
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const HOME_KEY = "Home";
const END_KEY = "End";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_FADE$1 = "fade";
const CLASS_NAME_SHOW$1 = "show";
const CLASS_DROPDOWN = "dropdown";
const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = ".nav-item, .list-group-item";
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class Tab extends BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest(SELECTOR_TAB_PANEL);
        if (!this._parent) return;
        // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    // Getters
    static get NAME() {
        return NAME$1;
    }
    // Public
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
        // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add(CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            EventHandler.trigger(element, EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove(CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            EventHandler.trigger(element, EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            ARROW_LEFT_KEY,
            ARROW_RIGHT_KEY,
            ARROW_UP_KEY,
            ARROW_DOWN_KEY,
            HOME_KEY,
            END_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const children = this._getChildren().filter((element)=>!isDisabled(element));
        let nextActiveElement;
        if ([
            HOME_KEY,
            END_KEY
        ].includes(event.key)) nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
        else {
            const isNext = [
                ARROW_RIGHT_KEY,
                ARROW_DOWN_KEY
            ].includes(event.key);
            nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
        }
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            Tab.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab");
        // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = SelectorEngine.getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(element);
});
/**
 * jQuery
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME = "toast";
const DATA_KEY = "bs.toast";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class Toast extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    // Getters
    static get Default() {
        return Default;
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get NAME() {
        return NAME;
    }
    // Public
    show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = isInteracting;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Toast);
/**
 * jQuery
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"flpbH","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"flpbH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"7K3Zc","./modifiers/index.js":"5JHux","./createPopper.js":"8sA0P","./popper.js":"3Tctd","./popper-lite.js":"4O6GT","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"7K3Zc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"5JHux":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"3dYX2","./arrow.js":"kzpz3","./computeStyles.js":"hexsc","./eventListeners.js":"2NgCy","./flip.js":"hlxXG","./hide.js":"kIjYx","./offset.js":"cQ0rZ","./popperOffsets.js":"2d15F","./preventOverflow.js":"bylYw","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"3dYX2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"8ta3Y","../dom-utils/instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"8ta3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"12jsg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"jByay","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"jByay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kzpz3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"kAGt9","../dom-utils/getLayoutRect.js":"cky49","../dom-utils/contains.js":"hHwWW","../dom-utils/getOffsetParent.js":"7LWgy","../utils/getMainAxisFromPlacement.js":"90JOH","../utils/within.js":"ii1O4","../utils/mergePaddingObject.js":"lwMcv","../utils/expandToHashMap.js":"iIC6P","../enums.js":"7K3Zc","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kAGt9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"7K3Zc","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"cky49":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"lhGlY","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"lhGlY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"12jsg","../utils/math.js":"4LC26","./getWindow.js":"jByay","./isLayoutViewport.js":"jJooC","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"4LC26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"jJooC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"kkQEh","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kkQEh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"hHwWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"7LWgy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"jByay","./getNodeName.js":"8ta3Y","./getComputedStyle.js":"3Ao05","./instanceOf.js":"12jsg","./isTableElement.js":"8x5pM","./getParentNode.js":"fXgBy","../utils/userAgent.js":"kkQEh","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"3Ao05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"jByay","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"8x5pM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"8ta3Y","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"fXgBy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"8ta3Y","./getDocumentElement.js":"gjkjo","./instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"gjkjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"90JOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"ii1O4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"lwMcv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"3lVTE","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"3lVTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"iIC6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"hexsc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"7K3Zc","../dom-utils/getOffsetParent.js":"7LWgy","../dom-utils/getWindow.js":"jByay","../dom-utils/getDocumentElement.js":"gjkjo","../dom-utils/getComputedStyle.js":"3Ao05","../utils/getBasePlacement.js":"kAGt9","../utils/getVariation.js":"2qb5V","../utils/math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"2qb5V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"2NgCy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"jByay","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"hlxXG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"7swcM","../utils/getBasePlacement.js":"kAGt9","../utils/getOppositeVariationPlacement.js":"j1ViH","../utils/detectOverflow.js":"iEEuO","../utils/computeAutoPlacement.js":"klnPO","../enums.js":"7K3Zc","../utils/getVariation.js":"2qb5V","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"7swcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"j1ViH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"iEEuO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"cv67y","../dom-utils/getDocumentElement.js":"gjkjo","../dom-utils/getBoundingClientRect.js":"lhGlY","./computeOffsets.js":"8JKyY","./rectToClientRect.js":"brI6D","../enums.js":"7K3Zc","../dom-utils/instanceOf.js":"12jsg","./mergePaddingObject.js":"lwMcv","./expandToHashMap.js":"iIC6P","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"cv67y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"7K3Zc","./getViewportRect.js":"a4lQo","./getDocumentRect.js":"aJbZC","./listScrollParents.js":"g1PvK","./getOffsetParent.js":"7LWgy","./getDocumentElement.js":"gjkjo","./getComputedStyle.js":"3Ao05","./instanceOf.js":"12jsg","./getBoundingClientRect.js":"lhGlY","./getParentNode.js":"fXgBy","./contains.js":"hHwWW","./getNodeName.js":"8ta3Y","../utils/rectToClientRect.js":"brI6D","../utils/math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"a4lQo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"jByay","./getDocumentElement.js":"gjkjo","./getWindowScrollBarX.js":"jQxWQ","./isLayoutViewport.js":"jJooC","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"jQxWQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"lhGlY","./getDocumentElement.js":"gjkjo","./getWindowScroll.js":"dkTtX","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"dkTtX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"jByay","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"aJbZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"gjkjo","./getComputedStyle.js":"3Ao05","./getWindowScrollBarX.js":"jQxWQ","./getWindowScroll.js":"dkTtX","../utils/math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"g1PvK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"a1UUh","./getParentNode.js":"fXgBy","./getWindow.js":"jByay","./isScrollParent.js":"qE6Yq","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"a1UUh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"fXgBy","./isScrollParent.js":"qE6Yq","./getNodeName.js":"8ta3Y","./instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"qE6Yq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3Ao05","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"brI6D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"8JKyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"kAGt9","./getVariation.js":"2qb5V","./getMainAxisFromPlacement.js":"90JOH","../enums.js":"7K3Zc","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"klnPO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"2qb5V","../enums.js":"7K3Zc","./detectOverflow.js":"iEEuO","./getBasePlacement.js":"kAGt9","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kIjYx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"7K3Zc","../utils/detectOverflow.js":"iEEuO","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"cQ0rZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"kAGt9","../enums.js":"7K3Zc","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"2d15F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"8JKyY","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"bylYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"7K3Zc","../utils/getBasePlacement.js":"kAGt9","../utils/getMainAxisFromPlacement.js":"90JOH","../utils/getAltAxis.js":"9m0vQ","../utils/within.js":"ii1O4","../dom-utils/getLayoutRect.js":"cky49","../dom-utils/getOffsetParent.js":"7LWgy","../utils/detectOverflow.js":"iEEuO","../utils/getVariation.js":"2qb5V","../utils/getFreshSideObject.js":"3lVTE","../utils/math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"9m0vQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"8sA0P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"41cYP","./dom-utils/getLayoutRect.js":"cky49","./dom-utils/listScrollParents.js":"g1PvK","./dom-utils/getOffsetParent.js":"7LWgy","./utils/orderModifiers.js":"1XpJp","./utils/debounce.js":"am6Ec","./utils/mergeByName.js":"kKwZI","./utils/detectOverflow.js":"iEEuO","./dom-utils/instanceOf.js":"12jsg","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"41cYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"lhGlY","./getNodeScroll.js":"13Wyu","./getNodeName.js":"8ta3Y","./instanceOf.js":"12jsg","./getWindowScrollBarX.js":"jQxWQ","./getDocumentElement.js":"gjkjo","./isScrollParent.js":"qE6Yq","../utils/math.js":"4LC26","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"13Wyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"dkTtX","./getWindow.js":"jByay","./instanceOf.js":"12jsg","./getHTMLElementScroll.js":"97zwt","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"97zwt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"1XpJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"7K3Zc","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"am6Ec":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kKwZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"3Tctd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"8sA0P","./modifiers/eventListeners.js":"2NgCy","./modifiers/popperOffsets.js":"2d15F","./modifiers/computeStyles.js":"hexsc","./modifiers/applyStyles.js":"3dYX2","./modifiers/offset.js":"cQ0rZ","./modifiers/flip.js":"hlxXG","./modifiers/preventOverflow.js":"bylYw","./modifiers/arrow.js":"kzpz3","./modifiers/hide.js":"kIjYx","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"4O6GT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"8sA0P","./modifiers/eventListeners.js":"2NgCy","./modifiers/popperOffsets.js":"2d15F","./modifiers/computeStyles.js":"hexsc","./modifiers/applyStyles.js":"3dYX2","@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}],"kdvz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MuteState;
(function(MuteState) {
    MuteState[MuteState["Temp"] = 0] = "Temp";
    MuteState[MuteState["Perma"] = 1] = "Perma";
    MuteState[MuteState["Unmuted"] = 2] = "Unmuted";
})(MuteState || (MuteState = {}));
exports.default = MuteState;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fDCb9"}]},["e8uG5","6NaQJ"], "6NaQJ", "parcelRequire94c2")

//# sourceMappingURL=index.07ecd563.js.map
