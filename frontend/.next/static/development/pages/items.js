((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/items.js"],{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Philippe/Dev/JS/REACT_GRAPHQL_SITE/Advanced-React/sick-fits/frontend/components/Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY {\n    items {\n      id\n      title\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Items!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "I found ", data.items.length, " items");
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./node_modules/apollo-client/ApolloClient.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-client/ApolloClient.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var _core_QueryManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/QueryManager */ "./node_modules/apollo-client/core/QueryManager.js");
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/store */ "./node_modules/apollo-client/data/store.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "./node_modules/apollo-client/version.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var hasSuggestedDevtools = false;
var supportedDirectives = new apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"](function (operation, forward) {
    operation.query = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeConnectionDirectiveFromDocument"])(operation.query);
    return forward(operation);
});
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        var link = options.link, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions;
        if (!link || !cache) {
            throw new Error("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ");
        }
        this.link = supportedDirectives.concat(link);
        this.cache = cache;
        this.store = new _data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.ssrMode = ssrMode;
        this.defaultOptions = defaultOptions || {};
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools = !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isProduction"])() &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isProduction"])()) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator &&
                        window.navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = _version__WEBPACK_IMPORTED_MODULE_4__["version"];
    }
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = __assign({}, this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.initQueryManager().watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = __assign({}, this.defaultOptions.query, options);
        }
        if (options.fetchPolicy === 'cache-and-network') {
            throw new Error('cache-and-network fetchPolicy can only be used with watchQuery');
        }
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.initQueryManager().query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = __assign({}, this.defaultOptions.mutate, options);
        }
        return this.initQueryManager().mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.initQueryManager().startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.initProxy().readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.initProxy().readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var result = this.initProxy().writeQuery(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var result = this.initProxy().writeFragment(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeData = function (options) {
        var result = this.initProxy().writeData(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(apollo_link__WEBPACK_IMPORTED_MODULE_0__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.initQueryManager = function () {
        var _this = this;
        if (!this.queryManager) {
            this.queryManager = new _core_QueryManager__WEBPACK_IMPORTED_MODULE_2__["QueryManager"]({
                link: this.link,
                store: this.store,
                queryDeduplication: this.queryDeduplication,
                ssrMode: this.ssrMode,
                onBroadcast: function () {
                    if (_this.devToolsHookCb) {
                        _this.devToolsHookCb({
                            action: {},
                            state: {
                                queries: _this.queryManager
                                    ? _this.queryManager.queryStore.getStore()
                                    : {},
                                mutations: _this.queryManager
                                    ? _this.queryManager.mutationStore.getStore()
                                    : {},
                            },
                            dataWithOptimisticResults: _this.cache.extract(true),
                        });
                    }
                },
            });
        }
        return this.queryManager;
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            return _this.queryManager
                ? _this.queryManager.clearStore()
                : Promise.resolve(null);
        })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () {
            return _this.queryManager && _this.queryManager.reFetchObservableQueries
                ? _this.queryManager.reFetchObservableQueries()
                : Promise.resolve(null);
        });
    };
    ApolloClient.prototype.clearStore = function () {
        var queryManager = this.queryManager;
        return Promise.resolve().then(function () { return (queryManager ? queryManager.clearStore() : Promise.resolve(null)); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager
            ? this.queryManager.reFetchObservableQueries(includeStandby)
            : Promise.resolve(null);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.initProxy().extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.initProxy().restore(serializedState);
    };
    ApolloClient.prototype.initProxy = function () {
        if (!this.proxy) {
            this.initQueryManager();
            this.proxy = this.cache;
        }
        return this.proxy;
    };
    return ApolloClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApolloClient);
//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ "./node_modules/apollo-client/core/ObservableQuery.js":
/*!************************************************************!*\
  !*** ./node_modules/apollo-client/core/ObservableQuery.js ***!
  \************************************************************/
/*! exports provided: hasError, ObservableQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var _networkStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networkStatus */ "./node_modules/apollo-client/core/networkStatus.js");
/* harmony import */ var _util_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Observable */ "./node_modules/apollo-client/util/Observable.js");
/* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/ApolloError */ "./node_modules/apollo-client/errors/ApolloError.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/apollo-client/core/types.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue &&
        ((storeValue.graphQLErrors &&
            storeValue.graphQLErrors.length > 0 &&
            policy === 'none') ||
            storeValue.networkError);
};
var ObservableQuery = (function (_super) {
    __extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var scheduler = _a.scheduler, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.isCurrentlyPolling = false;
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {};
        _this.queryId = scheduler.queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        _this.scheduler = scheduler;
        _this.queryManager = scheduler.queryManager;
        _this.observers = [];
        _this.subscriptionHandles = [];
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            var subscription;
            var observer = {
                next: function (result) {
                    resolve(result);
                    if (!that.observers.some(function (obs) { return obs !== observer; })) {
                        that.queryManager.removeQuery(that.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: function (error) {
                    reject(error);
                },
            };
            subscription = that.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        if (this.isTornDown) {
            return {
                data: this.lastError ? {} : this.lastResult ? this.lastResult.data : {},
                error: this.lastError,
                loading: false,
                networkStatus: _networkStatus__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"].error,
            };
        }
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        if (hasError(queryStoreValue, this.options.errorPolicy)) {
            return {
                data: {},
                loading: false,
                networkStatus: queryStoreValue.networkStatus,
                error: new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError,
                }),
            };
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryLoading = !queryStoreValue ||
            queryStoreValue.networkStatus === _networkStatus__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"].loading;
        var loading = (this.options.fetchPolicy === 'network-only' && queryLoading) ||
            (partial && this.options.fetchPolicy !== 'cache-only');
        var networkStatus;
        if (queryStoreValue) {
            networkStatus = queryStoreValue.networkStatus;
        }
        else {
            networkStatus = loading ? _networkStatus__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"].loading : _networkStatus__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"].ready;
        }
        var result = {
            data: data,
            loading: Object(_networkStatus__WEBPACK_IMPORTED_MODULE_1__["isNetworkRequestInFlight"])(networkStatus),
            networkStatus: networkStatus,
        };
        if (queryStoreValue &&
            queryStoreValue.graphQLErrors &&
            this.options.errorPolicy === 'all') {
            result.errors = queryStoreValue.graphQLErrors;
        }
        if (!partial) {
            var stale = false;
            this.lastResult = __assign({}, result, { stale: stale });
        }
        return __assign({}, result, { partial: partial });
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') {
            return Promise.reject(new Error('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this.variables, variables)) {
            this.variables = Object.assign({}, this.variables, variables);
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this.options.variables, this.variables)) {
            this.options.variables = Object.assign({}, this.options.variables, this.variables);
        }
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
        var combinedOptions = __assign({}, this.options, { fetchPolicy: isNetworkFetchPolicy ? fetchPolicy : 'network-only' });
        return this.queryManager
            .fetchQuery(this.queryId, combinedOptions, _types__WEBPACK_IMPORTED_MODULE_4__["FetchType"].refetch)
            .then(function (result) { return result; });
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        if (!fetchMoreOptions.updateQuery) {
            throw new Error('updateQuery option is required. This function defines how to update the query data with the new results.');
        }
        var combinedOptions;
        return Promise.resolve()
            .then(function () {
            var qid = _this.queryManager.generateQueryId();
            if (fetchMoreOptions.query) {
                combinedOptions = fetchMoreOptions;
            }
            else {
                combinedOptions = __assign({}, _this.options, fetchMoreOptions, { variables: Object.assign({}, _this.variables, fetchMoreOptions.variables) });
            }
            combinedOptions.fetchPolicy = 'network-only';
            return _this.queryManager.fetchQuery(qid, combinedOptions, _types__WEBPACK_IMPORTED_MODULE_4__["FetchType"].normal, _this.queryId);
        })
            .then(function (fetchMoreResult) {
            _this.updateQuery(function (previousResult) {
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables,
                });
            });
            return fetchMoreResult;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        })
            .subscribe({
            next: function (subscriptionData) {
                if (options.updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return options.updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                console.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptionHandles.push(subscription);
        return function () {
            var i = _this.subscriptionHandles.indexOf(subscription);
            if (i >= 0) {
                _this.subscriptionHandles.splice(i, 1);
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldOptions = this.options;
        this.options = Object.assign({}, this.options, opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var tryFetch = (oldOptions.fetchPolicy !== 'network-only' &&
            opts.fetchPolicy === 'network-only') ||
            (oldOptions.fetchPolicy === 'cache-only' &&
                opts.fetchPolicy !== 'cache-only') ||
            (oldOptions.fetchPolicy === 'standby' &&
                opts.fetchPolicy !== 'standby') ||
            false;
        return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        this.isTornDown = false;
        var newVariables = variables ? variables : this.variables;
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(newVariables, this.variables) && !tryFetch) {
            if (this.observers.length === 0 || !fetchResults) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.result();
        }
        else {
            this.variables = newVariables;
            this.options.variables = newVariables;
            if (this.observers.length === 0) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.queryManager
                .fetchQuery(this.queryId, __assign({}, this.options, { variables: this.variables }))
                .then(function (result) { return result; });
        }
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["tryFunctionOrLogError"])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            this.queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            this.queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.options.pollInterval = undefined;
            this.isCurrentlyPolling = false;
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        if (this.options.fetchPolicy === 'cache-first' ||
            this.options.fetchPolicy === 'cache-only') {
            throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
        }
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.options.pollInterval = pollInterval;
        this.isCurrentlyPolling = true;
        this.scheduler.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        if (observer._subscription &&
            observer._subscription._observer &&
            !observer._subscription._observer.error) {
            observer._subscription._observer.error = function (error) {
                console.error('Unhandled error', error.message, error.stack);
            };
        }
        this.observers.push(observer);
        if (observer.next && this.lastResult)
            observer.next(this.lastResult);
        if (observer.error && this.lastError)
            observer.error(this.lastError);
        if (this.observers.length === 1)
            this.setUpQuery();
        return function () {
            _this.observers = _this.observers.filter(function (obs) { return obs !== observer; });
            if (_this.observers.length === 0) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        if (this.shouldSubscribe) {
            this.queryManager.addObservableQuery(this.queryId, this);
        }
        if (!!this.options.pollInterval) {
            if (this.options.fetchPolicy === 'cache-first' ||
                this.options.fetchPolicy === 'cache-only') {
                throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
            }
            this.isCurrentlyPolling = true;
            this.scheduler.startPollingQuery(this.options, this.queryId);
        }
        var observer = {
            next: function (result) {
                _this.lastResult = result;
                _this.observers.forEach(function (obs) { return obs.next && obs.next(result); });
            },
            error: function (error) {
                _this.lastError = error;
                _this.observers.forEach(function (obs) { return obs.error && obs.error(error); });
            },
        };
        this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        this.isTornDown = true;
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.subscriptionHandles.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptionHandles = [];
        this.queryManager.removeObservableQuery(this.queryId);
        this.queryManager.stopQuery(this.queryId);
        this.observers = [];
    };
    return ObservableQuery;
}(_util_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ "./node_modules/apollo-client/core/QueryManager.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-client/core/QueryManager.js ***!
  \*********************************************************/
/*! exports provided: QueryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryManager", function() { return QueryManager; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_link_dedup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-dedup */ "./node_modules/apollo-link-dedup/lib/index.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var _scheduler_scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scheduler/scheduler */ "./node_modules/apollo-client/scheduler/scheduler.js");
/* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/ApolloError */ "./node_modules/apollo-client/errors/ApolloError.js");
/* harmony import */ var _util_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Observable */ "./node_modules/apollo-client/util/Observable.js");
/* harmony import */ var _data_mutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/mutations */ "./node_modules/apollo-client/data/mutations.js");
/* harmony import */ var _data_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/queries */ "./node_modules/apollo-client/data/queries.js");
/* harmony import */ var _ObservableQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ObservableQuery */ "./node_modules/apollo-client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./networkStatus */ "./node_modules/apollo-client/core/networkStatus.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "./node_modules/apollo-client/core/types.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var defaultQueryInfo = {
    listeners: [],
    invalidated: false,
    document: null,
    newData: null,
    lastRequestId: null,
    observableQuery: null,
    subscriptions: [],
};
var QueryManager = (function () {
    function QueryManager(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d;
        this.mutationStore = new _data_mutations__WEBPACK_IMPORTED_MODULE_7__["MutationStore"]();
        this.queryStore = new _data_queries__WEBPACK_IMPORTED_MODULE_8__["QueryStore"]();
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryPromises = new Map();
        this.queryIdsByName = {};
        this.link = link;
        this.deduplicator = apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([new apollo_link_dedup__WEBPACK_IMPORTED_MODULE_2__["DedupLink"](), link]);
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.scheduler = new _scheduler_scheduler__WEBPACK_IMPORTED_MODULE_4__["QueryScheduler"]({ queryManager: this, ssrMode: ssrMode });
    }
    QueryManager.prototype.mutate = function (_a) {
        var _this = this;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        if (!mutation) {
            throw new Error('mutation option is required. You must specify your GraphQL document in the mutation option.');
        }
        if (fetchPolicy && fetchPolicy !== 'no-cache') {
            throw new Error("fetchPolicy for mutations currently only supports the 'no-cache' policy");
        }
        var mutationId = this.generateQueryId();
        var cache = this.dataStore.getCache();
        (mutation = cache.transformDocument(mutation)),
            (variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getMutationDefinition"])(mutation)), variables));
        var mutationString = Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(mutation);
        this.setQuery(mutationId, function () { return ({ document: mutation }); });
        var generateUpdateQueriesInfo = function () {
            var ret = {};
            if (updateQueriesByName) {
                Object.keys(updateQueriesByName).forEach(function (queryName) {
                    return (_this.queryIdsByName[queryName] || []).forEach(function (queryId) {
                        ret[queryId] = {
                            updater: updateQueriesByName[queryName],
                            query: _this.queryStore.get(queryId),
                        };
                    });
                });
            }
            return ret;
        };
        this.mutationStore.initMutation(mutationId, mutationString, variables);
        this.dataStore.markMutationInit({
            mutationId: mutationId,
            document: mutation,
            variables: variables || {},
            updateQueries: generateUpdateQueriesInfo(),
            update: updateWithProxyFn,
            optimisticResponse: optimisticResponse,
        });
        this.broadcastQueries();
        return new Promise(function (resolve, reject) {
            var storeResult;
            var error;
            var operation = _this.buildOperationForLink(mutation, variables, __assign({}, context, { optimisticResponse: optimisticResponse }));
            var completeMutation = function () { return __awaiter(_this, void 0, void 0, function () {
                var refetchQueryPromises, _i, refetchQueries_1, refetchQuery, promise, queryOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (error) {
                                this.mutationStore.markMutationError(mutationId, error);
                            }
                            this.dataStore.markMutationComplete({
                                mutationId: mutationId,
                                optimisticResponse: optimisticResponse,
                            });
                            this.broadcastQueries();
                            if (error) {
                                throw error;
                            }
                            if (typeof refetchQueries === 'function') {
                                refetchQueries = refetchQueries(storeResult);
                            }
                            refetchQueryPromises = [];
                            for (_i = 0, refetchQueries_1 = refetchQueries; _i < refetchQueries_1.length; _i++) {
                                refetchQuery = refetchQueries_1[_i];
                                if (typeof refetchQuery === 'string') {
                                    promise = this.refetchQueryByName(refetchQuery);
                                    if (promise) {
                                        refetchQueryPromises.push(promise);
                                    }
                                    continue;
                                }
                                queryOptions = {
                                    query: refetchQuery.query,
                                    variables: refetchQuery.variables,
                                    fetchPolicy: 'network-only',
                                };
                                if (refetchQuery.context) {
                                    queryOptions.context = refetchQuery.context;
                                }
                                refetchQueryPromises.push(this.query(queryOptions));
                            }
                            if (!awaitRefetchQueries) return [3, 2];
                            return [4, Promise.all(refetchQueryPromises)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.setQuery(mutationId, function () { return ({ document: undefined }); });
                            if (errorPolicy === 'ignore' &&
                                storeResult &&
                                Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["graphQLResultHasError"])(storeResult)) {
                                delete storeResult.errors;
                            }
                            return [2, storeResult];
                    }
                });
            }); };
            Object(apollo_link__WEBPACK_IMPORTED_MODULE_0__["execute"])(_this.link, operation).subscribe({
                next: function (result) {
                    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                        error = new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                            graphQLErrors: result.errors,
                        });
                        return;
                    }
                    _this.mutationStore.markMutationResult(mutationId);
                    if (fetchPolicy !== 'no-cache') {
                        _this.dataStore.markMutationResult({
                            mutationId: mutationId,
                            result: result,
                            document: mutation,
                            variables: variables || {},
                            updateQueries: generateUpdateQueriesInfo(),
                            update: updateWithProxyFn,
                        });
                    }
                    storeResult = result;
                },
                error: function (err) {
                    _this.mutationStore.markMutationError(mutationId, err);
                    _this.dataStore.markMutationComplete({
                        mutationId: mutationId,
                        optimisticResponse: optimisticResponse,
                    });
                    _this.broadcastQueries();
                    _this.setQuery(mutationId, function () { return ({ document: undefined }); });
                    reject(new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                        networkError: err,
                    }));
                },
                complete: function () { return completeMutation().then(resolve, reject); },
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        var _this = this;
        var _a = options.variables, variables = _a === void 0 ? {} : _a, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? 'cache-first' : _c;
        var cache = this.dataStore.getCache();
        var query = cache.transformDocument(options.query);
        var storeResult;
        var needToFetch = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
        if (fetchType !== _types__WEBPACK_IMPORTED_MODULE_11__["FetchType"].refetch &&
            fetchPolicy !== 'network-only' &&
            fetchPolicy !== 'no-cache') {
            var _d = this.dataStore.getCache().diff({
                query: query,
                variables: variables,
                returnPartialData: true,
                optimistic: false,
            }), complete = _d.complete, result = _d.result;
            needToFetch = !complete || fetchPolicy === 'cache-and-network';
            storeResult = result;
        }
        var shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["hasDirectives"])(['live'], query))
            shouldFetch = true;
        var requestId = this.generateRequestId();
        var cancel = this.updateQueryWatch(queryId, query, options);
        this.setQuery(queryId, function () { return ({
            document: query,
            lastRequestId: requestId,
            invalidated: true,
            cancel: cancel,
        }); });
        this.invalidate(true, fetchMoreForQueryId);
        this.queryStore.initQuery({
            queryId: queryId,
            document: query,
            storePreviousVariables: shouldFetch,
            variables: variables,
            isPoll: fetchType === _types__WEBPACK_IMPORTED_MODULE_11__["FetchType"].poll,
            isRefetch: fetchType === _types__WEBPACK_IMPORTED_MODULE_11__["FetchType"].refetch,
            metadata: metadata,
            fetchMoreForQueryId: fetchMoreForQueryId,
        });
        this.broadcastQueries();
        var shouldDispatchClientResult = !shouldFetch || fetchPolicy === 'cache-and-network';
        if (shouldDispatchClientResult) {
            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
            this.invalidate(true, queryId, fetchMoreForQueryId);
            this.broadcastQueries();
        }
        if (shouldFetch) {
            var networkResult = this.fetchRequest({
                requestId: requestId,
                queryId: queryId,
                document: query,
                options: options,
                fetchMoreForQueryId: fetchMoreForQueryId,
            }).catch(function (error) {
                if (Object(_errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["isApolloError"])(error)) {
                    throw error;
                }
                else {
                    var lastRequestId = _this.getQuery(queryId).lastRequestId;
                    if (requestId >= (lastRequestId || 1)) {
                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                        _this.invalidate(true, queryId, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                    _this.removeFetchQueryPromise(requestId);
                    throw new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({ networkError: error });
                }
            });
            if (fetchPolicy !== 'cache-and-network') {
                return networkResult;
            }
            else {
                networkResult.catch(function () { });
            }
        }
        return Promise.resolve({ data: storeResult });
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        var previouslyHadError = false;
        return function (queryStoreValue, newData) {
            _this.invalidate(false, queryId);
            if (!queryStoreValue)
                return;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            var fetchPolicy = observableQuery
                ? observableQuery.options.fetchPolicy
                : options.fetchPolicy;
            if (fetchPolicy === 'standby')
                return;
            var errorPolicy = observableQuery
                ? observableQuery.options.errorPolicy
                : options.errorPolicy;
            var lastResult = observableQuery
                ? observableQuery.getLastResult()
                : null;
            var lastError = observableQuery ? observableQuery.getLastError() : null;
            var shouldNotifyIfLoading = (!newData && queryStoreValue.previousVariables != null) ||
                fetchPolicy === 'cache-only' ||
                fetchPolicy === 'cache-and-network';
            var networkStatusChanged = Boolean(lastResult &&
                queryStoreValue.networkStatus !== lastResult.networkStatus);
            var errorStatusChanged = errorPolicy &&
                (lastError && lastError.graphQLErrors) !==
                    queryStoreValue.graphQLErrors &&
                errorPolicy !== 'none';
            if (!Object(_networkStatus__WEBPACK_IMPORTED_MODULE_10__["isNetworkRequestInFlight"])(queryStoreValue.networkStatus) ||
                (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                shouldNotifyIfLoading) {
                if (((!errorPolicy || errorPolicy === 'none') &&
                    queryStoreValue.graphQLErrors &&
                    queryStoreValue.graphQLErrors.length > 0) ||
                    queryStoreValue.networkError) {
                    var apolloError_1 = new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    });
                    previouslyHadError = true;
                    if (observer.error) {
                        try {
                            observer.error(apolloError_1);
                        }
                        catch (e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }
                    }
                    else {
                        setTimeout(function () {
                            throw apolloError_1;
                        }, 0);
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["isProduction"])()) {
                            console.info('An unhandled error was thrown because no error handler is registered ' +
                                'for the query ' +
                                Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(queryStoreValue.document));
                        }
                    }
                    return;
                }
                try {
                    var data = void 0;
                    var isMissing = void 0;
                    if (newData) {
                        if (fetchPolicy !== 'no-cache') {
                            _this.setQuery(queryId, function () { return ({ newData: null }); });
                        }
                        data = newData.result;
                        isMissing = !newData.complete || false;
                    }
                    else {
                        if (lastResult && lastResult.data && !errorStatusChanged) {
                            data = lastResult.data;
                            isMissing = false;
                        }
                        else {
                            var document_1 = _this.getQuery(queryId).document;
                            var readResult = _this.dataStore.getCache().diff({
                                query: document_1,
                                variables: queryStoreValue.previousVariables ||
                                    queryStoreValue.variables,
                                optimistic: true,
                            });
                            data = readResult.result;
                            isMissing = !readResult.complete;
                        }
                    }
                    var resultFromStore = void 0;
                    if (isMissing && fetchPolicy !== 'cache-only') {
                        resultFromStore = {
                            data: lastResult && lastResult.data,
                            loading: Object(_networkStatus__WEBPACK_IMPORTED_MODULE_10__["isNetworkRequestInFlight"])(queryStoreValue.networkStatus),
                            networkStatus: queryStoreValue.networkStatus,
                            stale: true,
                        };
                    }
                    else {
                        resultFromStore = {
                            data: data,
                            loading: Object(_networkStatus__WEBPACK_IMPORTED_MODULE_10__["isNetworkRequestInFlight"])(queryStoreValue.networkStatus),
                            networkStatus: queryStoreValue.networkStatus,
                            stale: false,
                        };
                    }
                    if (errorPolicy === 'all' &&
                        queryStoreValue.graphQLErrors &&
                        queryStoreValue.graphQLErrors.length > 0) {
                        resultFromStore.errors = queryStoreValue.graphQLErrors;
                    }
                    if (observer.next) {
                        var isDifferentResult = !(lastResult &&
                            resultFromStore &&
                            lastResult.networkStatus === resultFromStore.networkStatus &&
                            lastResult.stale === resultFromStore.stale &&
                            lastResult.data === resultFromStore.data);
                        if (isDifferentResult || previouslyHadError) {
                            try {
                                observer.next(resultFromStore);
                            }
                            catch (e) {
                                setTimeout(function () {
                                    throw e;
                                }, 0);
                            }
                        }
                    }
                    previouslyHadError = false;
                }
                catch (error) {
                    previouslyHadError = true;
                    if (observer.error)
                        observer.error(new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({ networkError: error }));
                    return;
                }
            }
        };
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
        if (options.fetchPolicy === 'standby') {
            throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"');
        }
        var queryDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"])(options.query);
        if (queryDefinition.variableDefinitions &&
            queryDefinition.variableDefinitions.length) {
            var defaultValues = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(queryDefinition);
            options.variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, defaultValues, options.variables);
        }
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = __assign({}, options);
        return new _ObservableQuery__WEBPACK_IMPORTED_MODULE_9__["ObservableQuery"]({
            scheduler: this.scheduler,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
        if (!options.query) {
            throw new Error('query option is required. You must specify your GraphQL document ' +
                'in the query option.');
        }
        if (options.query.kind !== 'Document') {
            throw new Error('You must wrap the query string in a "gql" tag.');
        }
        if (options.returnPartialData) {
            throw new Error('returnPartialData option only supported on watchQuery.');
        }
        if (options.pollInterval) {
            throw new Error('pollInterval option only supported on watchQuery.');
        }
        var requestId = this.idCounter;
        return new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, resolve, reject);
            return _this.watchQuery(options, false)
                .result()
                .then(function (result) {
                _this.removeFetchQueryPromise(requestId);
                resolve(result);
            })
                .catch(function (error) {
                _this.removeFetchQueryPromise(requestId);
                reject(error);
            });
        });
    };
    QueryManager.prototype.generateQueryId = function () {
        var queryId = this.idCounter.toString();
        this.idCounter++;
        return queryId;
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.queryStore.stopQuery(queryId);
        this.invalidate(true, queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.setQuery(queryId, function (_a) {
            var _b = _a.listeners, listeners = _b === void 0 ? [] : _b;
            return ({
                listeners: listeners.concat([listener]),
                invalidate: false,
            });
        });
    };
    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel)
            cancel();
        var previousResult = function () {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) {
                    previousResult = lastResult.data;
                }
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult,
            callback: function (newData) {
                _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
            },
        });
    };
    QueryManager.prototype.addFetchQueryPromise = function (requestId, resolve, reject) {
        this.fetchQueryPromises.set(requestId.toString(), {
            resolve: resolve,
            reject: reject,
        });
    };
    QueryManager.prototype.removeFetchQueryPromise = function (requestId) {
        this.fetchQueryPromises.delete(requestId.toString());
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
        var queryDef = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"])(observableQuery.options.query);
        if (queryDef.name && queryDef.name.value) {
            var queryName = queryDef.name.value;
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
            this.queryIdsByName[queryName].push(observableQuery.queryId);
        }
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var _a = this.getQuery(queryId), observableQuery = _a.observableQuery, cancel = _a.cancel;
        if (cancel)
            cancel();
        if (!observableQuery)
            return;
        var definition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"])(observableQuery.options.query);
        var queryName = definition.name ? definition.name.value : null;
        this.setQuery(queryId, function () { return ({ observableQuery: null }); });
        if (queryName) {
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function (val) {
                return !(observableQuery.queryId === val);
            });
        }
    };
    QueryManager.prototype.clearStore = function () {
        this.fetchQueryPromises.forEach(function (_a) {
            var reject = _a.reject;
            reject(new Error('Store reset while query was in flight(not completed in link chain)'));
        });
        var resetIds = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery)
                resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        var reset = this.dataStore.reset();
        return reset;
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var observableQueryPromises = this.getObservableQueryPromises(includeStandby);
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function () { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (options) {
        var _this = this;
        var query = options.query;
        var isCacheEnabled = !(options.fetchPolicy && options.fetchPolicy === 'no-cache');
        var cache = this.dataStore.getCache();
        var transformedDoc = cache.transformDocument(query);
        var variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"])(query)), options.variables);
        var sub;
        var observers = [];
        return new _util_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
            observers.push(observer);
            if (observers.length === 1) {
                var handler = {
                    next: function (result) {
                        if (isCacheEnabled) {
                            _this.dataStore.markSubscriptionResult(result, transformedDoc, variables);
                            _this.broadcastQueries();
                        }
                        observers.forEach(function (obs) {
                            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["graphQLResultHasError"])(result) && obs.error) {
                                obs.error(new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                                    graphQLErrors: result.errors,
                                }));
                            }
                            else if (obs.next) {
                                obs.next(result);
                            }
                        });
                    },
                    error: function (error) {
                        observers.forEach(function (obs) {
                            if (obs.error) {
                                obs.error(error);
                            }
                        });
                    },
                };
                var operation = _this.buildOperationForLink(transformedDoc, variables);
                sub = Object(apollo_link__WEBPACK_IMPORTED_MODULE_0__["execute"])(_this.link, operation).subscribe(handler);
            }
            return function () {
                observers = observers.filter(function (obs) { return obs !== observer; });
                if (observers.length === 0 && sub) {
                    sub.unsubscribe();
                }
            };
        });
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryInStore(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        var subscriptions = this.getQuery(queryId).subscriptions;
        subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
        if (optimistic === void 0) { optimistic = true; }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData) {
            return { data: newData.result, partial: false };
        }
        else {
            try {
                var data = this.dataStore.getCache().read({
                    query: query,
                    variables: variables,
                    previousResult: lastResult ? lastResult.data : undefined,
                    optimistic: optimistic,
                });
                return { data: data, partial: false };
            }
            catch (e) {
                return { data: {}, partial: true };
            }
        }
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
            if (!foundObserveableQuery) {
                throw new Error("ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            }
            observableQuery = foundObserveableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        var data = this.getCurrentQueryResult(observableQuery, false).data;
        return {
            previousResult: data,
            variables: variables,
            document: query,
        };
    };
    QueryManager.prototype.broadcastQueries = function () {
        var _this = this;
        this.onBroadcast();
        this.queries.forEach(function (info, id) {
            if (!info.invalidated || !info.listeners)
                return;
            info.listeners
                .filter(function (x) { return !!x; })
                .forEach(function (listener) {
                listener(_this.queryStore.get(id), info.newData);
            });
        });
    };
    QueryManager.prototype.getObservableQueryPromises = function (includeStandby) {
        var _this = this;
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (!observableQuery)
                return;
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (fetchPolicy !== 'cache-only' &&
                (includeStandby || fetchPolicy !== 'standby')) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.setQuery(queryId, function () { return ({ newData: null }); });
            _this.invalidate(true, queryId);
        });
        return observableQueryPromises;
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables, context = options.context, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
        var operation = this.buildOperationForLink(document, variables, __assign({}, context, { forceFetch: !this.queryDeduplication }));
        var resultFromStore;
        var errorsFromStore;
        return new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, resolve, reject);
            var subscription = Object(apollo_link__WEBPACK_IMPORTED_MODULE_0__["execute"])(_this.deduplicator, operation).subscribe({
                next: function (result) {
                    var lastRequestId = _this.getQuery(queryId).lastRequestId;
                    if (requestId >= (lastRequestId || 1)) {
                        if (fetchPolicy !== 'no-cache') {
                            try {
                                _this.dataStore.markQueryResult(result, document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        }
                        else {
                            _this.setQuery(queryId, function () { return ({
                                newData: { result: result.data, complete: true },
                            }); });
                        }
                        _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                        _this.invalidate(true, queryId, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                    if (result.errors && errorPolicy === 'none') {
                        reject(new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]({
                            graphQLErrors: result.errors,
                        }));
                        return;
                    }
                    else if (errorPolicy === 'all') {
                        errorsFromStore = result.errors;
                    }
                    if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
                        resultFromStore = result.data;
                    }
                    else {
                        try {
                            resultFromStore = _this.dataStore.getCache().read({
                                variables: variables,
                                query: document,
                                optimistic: false,
                            });
                        }
                        catch (e) { }
                    }
                },
                error: function (error) {
                    _this.removeFetchQueryPromise(requestId);
                    _this.setQuery(queryId, function (_a) {
                        var subscriptions = _a.subscriptions;
                        return ({
                            subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                        });
                    });
                    reject(error);
                },
                complete: function () {
                    _this.removeFetchQueryPromise(requestId);
                    _this.setQuery(queryId, function (_a) {
                        var subscriptions = _a.subscriptions;
                        return ({
                            subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                        });
                    });
                    resolve({
                        data: resultFromStore,
                        errors: errorsFromStore,
                        loading: false,
                        networkStatus: _networkStatus__WEBPACK_IMPORTED_MODULE_10__["NetworkStatus"].ready,
                        stale: false,
                    });
                },
            });
            _this.setQuery(queryId, function (_a) {
                var subscriptions = _a.subscriptions;
                return ({
                    subscriptions: subscriptions.concat([subscription]),
                });
            });
        });
    };
    QueryManager.prototype.refetchQueryByName = function (queryName) {
        var _this = this;
        var refetchedQueries = this.queryIdsByName[queryName];
        if (refetchedQueries === undefined)
            return;
        return Promise.all(refetchedQueries
            .map(function (id) { return _this.getQuery(id).observableQuery; })
            .filter(function (x) { return !!x; })
            .map(function (x) { return x.refetch(); }));
    };
    QueryManager.prototype.generateRequestId = function () {
        var requestId = this.idCounter;
        this.idCounter++;
        return requestId;
    };
    QueryManager.prototype.getQuery = function (queryId) {
        return this.queries.get(queryId) || __assign({}, defaultQueryInfo);
    };
    QueryManager.prototype.setQuery = function (queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = __assign({}, prev, updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager.prototype.invalidate = function (invalidated, queryId, fetchMoreForQueryId) {
        if (queryId)
            this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
        if (fetchMoreForQueryId) {
            this.setQuery(fetchMoreForQueryId, function () { return ({ invalidated: invalidated }); });
        }
    };
    QueryManager.prototype.buildOperationForLink = function (document, variables, extraContext) {
        var cache = this.dataStore.getCache();
        return {
            query: cache.transformForLink
                ? cache.transformForLink(document)
                : document,
            variables: variables,
            operationName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"])(document) || undefined,
            context: __assign({}, extraContext, { cache: cache, getCacheKey: function (obj) {
                    if (cache.config) {
                        return cache.config.dataIdFromObject(obj);
                    }
                    else {
                        throw new Error('To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.');
                    }
                } }),
        };
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),

/***/ "./node_modules/apollo-client/core/networkStatus.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-client/core/networkStatus.js ***!
  \**********************************************************/
/*! exports provided: NetworkStatus, isNetworkRequestInFlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNetworkRequestInFlight", function() { return isNetworkRequestInFlight; });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ "./node_modules/apollo-client/core/types.js":
/*!**************************************************!*\
  !*** ./node_modules/apollo-client/core/types.js ***!
  \**************************************************/
/*! exports provided: FetchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return FetchType; });
var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/apollo-client/data/mutations.js":
/*!******************************************************!*\
  !*** ./node_modules/apollo-client/data/mutations.js ***!
  \******************************************************/
/*! exports provided: MutationStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationStore", function() { return MutationStore; });
var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutationString, variables) {
        this.store[mutationId] = {
            mutationString: mutationString,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        var mutation = this.store[mutationId];
        if (!mutation) {
            return;
        }
        mutation.loading = false;
        mutation.error = error;
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        var mutation = this.store[mutationId];
        if (!mutation) {
            return;
        }
        mutation.loading = false;
        mutation.error = null;
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

//# sourceMappingURL=mutations.js.map

/***/ }),

/***/ "./node_modules/apollo-client/data/queries.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-client/data/queries.js ***!
  \****************************************************/
/*! exports provided: QueryStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryStore", function() { return QueryStore; });
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/networkStatus */ "./node_modules/apollo-client/core/networkStatus.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
        if (previousQuery &&
            previousQuery.document !== query.document &&
            Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__["print"])(previousQuery.document) !== Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__["print"])(query.document)) {
            throw new Error('Internal Error: may not update existing query string in store');
        }
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading) {
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].setVariables;
        }
        else if (query.isPoll) {
            networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].poll;
        }
        else if (query.isRefetch) {
            networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].refetch;
        }
        else {
            networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading;
        }
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
        }
        this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string' &&
            this.store[query.fetchMoreForQueryId]) {
            this.store[query.fetchMoreForQueryId].networkStatus =
                _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors =
            result.errors && result.errors.length ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].ready;
        if (typeof fetchMoreForQueryId === 'string' &&
            this.store[fetchMoreForQueryId]) {
            this.store[fetchMoreForQueryId].networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryResultClient(fetchMoreForQueryId, true);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = complete
            ? _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].ready
            : _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading;
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        this.store = Object.keys(this.store)
            .filter(function (queryId) {
            return observableQueryIds.indexOf(queryId) > -1;
        })
            .reduce(function (res, key) {
            res[key] = __assign({}, _this.store[key], { networkStatus: _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].loading });
            return res;
        }, {});
    };
    return QueryStore;
}());

//# sourceMappingURL=queries.js.map

/***/ }),

/***/ "./node_modules/apollo-client/data/store.js":
/*!**************************************************!*\
  !*** ./node_modules/apollo-client/data/store.js ***!
  \**************************************************/
/*! exports provided: DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");

var DataStore = (function () {
    function DataStore(initialCache) {
        this.cache = initialCache;
    }
    DataStore.prototype.getCache = function () {
        return this.cache;
    };
    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) { ignoreErrors = false; }
        var writeWithErrors = !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["graphQLResultHasError"])(result);
        if (ignoreErrors && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["graphQLResultHasError"])(result) && result.data) {
            writeWithErrors = true;
        }
        if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["graphQLResultHasError"])(result)) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markMutationInit = function (mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') {
                optimistic_1 = mutation.optimisticResponse(mutation.variables);
            }
            else {
                optimistic_1 = mutation.optimisticResponse;
            }
            var changeFn_1 = function () {
                _this.markMutationResult({
                    mutationId: mutation.mutationId,
                    result: { data: optimistic_1 },
                    document: mutation.document,
                    variables: mutation.variables,
                    updateQueries: mutation.updateQueries,
                    update: mutation.update,
                });
            };
            this.cache.recordOptimisticTransaction(function (c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    changeFn_1();
                }
                finally {
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore.prototype.markMutationResult = function (mutation) {
        var _this = this;
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["graphQLResultHasError"])(mutation.result)) {
            var cacheWrites_1 = [];
            cacheWrites_1.push({
                result: mutation.result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            if (mutation.updateQueries) {
                Object.keys(mutation.updateQueries)
                    .filter(function (id) { return mutation.updateQueries[id]; })
                    .forEach(function (queryId) {
                    var _a = mutation.updateQueries[queryId], query = _a.query, updater = _a.updater;
                    var _b = _this.cache.diff({
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _b.result, complete = _b.complete;
                    if (!complete) {
                        return;
                    }
                    var nextQueryResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["tryFunctionOrLogError"])(function () {
                        return updater(currentQueryResult, {
                            mutationResult: mutation.result,
                            queryName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getOperationName"])(query.document) || undefined,
                            queryVariables: query.variables,
                        });
                    });
                    if (nextQueryResult) {
                        cacheWrites_1.push({
                            result: nextQueryResult,
                            dataId: 'ROOT_QUERY',
                            query: query.document,
                            variables: query.variables,
                        });
                    }
                });
            }
            this.cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
            });
            var update_1 = mutation.update;
            if (update_1) {
                this.cache.performTransaction(function (c) {
                    Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["tryFunctionOrLogError"])(function () { return update_1(c, mutation.result); });
                });
            }
        }
    };
    DataStore.prototype.markMutationComplete = function (_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (!optimisticResponse)
            return;
        this.cache.removeOptimistic(mutationId);
    };
    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document,
        });
    };
    DataStore.prototype.reset = function () {
        return this.cache.reset();
    };
    return DataStore;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ "./node_modules/apollo-client/errors/ApolloError.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-client/errors/ApolloError.js ***!
  \**********************************************************/
/*! exports provided: isApolloError, ApolloError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    __extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=ApolloError.js.map

/***/ }),

/***/ "./node_modules/apollo-client/index.js":
/*!*********************************************!*\
  !*** ./node_modules/apollo-client/index.js ***!
  \*********************************************/
/*! exports provided: printAST, ObservableQuery, NetworkStatus, ApolloError, ApolloClient, default, FetchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printAST", function() { return graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__["print"]; });

/* harmony import */ var _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ObservableQuery */ "./node_modules/apollo-client/core/ObservableQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]; });

/* harmony import */ var _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/networkStatus */ "./node_modules/apollo-client/core/networkStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"]; });

/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/types */ "./node_modules/apollo-client/core/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return _core_types__WEBPACK_IMPORTED_MODULE_3__["FetchType"]; });

/* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/ApolloError */ "./node_modules/apollo-client/errors/ApolloError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _errors_ApolloError__WEBPACK_IMPORTED_MODULE_4__["ApolloError"]; });

/* harmony import */ var _ApolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApolloClient */ "./node_modules/apollo-client/ApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _ApolloClient__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/* harmony default export */ __webpack_exports__["default"] = (_ApolloClient__WEBPACK_IMPORTED_MODULE_5__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-client/scheduler/scheduler.js":
/*!***********************************************************!*\
  !*** ./node_modules/apollo-client/scheduler/scheduler.js ***!
  \***********************************************************/
/*! exports provided: QueryScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryScheduler", function() { return QueryScheduler; });
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/types */ "./node_modules/apollo-client/core/types.js");
/* harmony import */ var _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ObservableQuery */ "./node_modules/apollo-client/core/ObservableQuery.js");
/* harmony import */ var _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/networkStatus */ "./node_modules/apollo-client/core/networkStatus.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var QueryScheduler = (function () {
    function QueryScheduler(_a) {
        var queryManager = _a.queryManager, ssrMode = _a.ssrMode;
        this.inFlightQueries = {};
        this.registeredQueries = {};
        this.intervalQueries = {};
        this.pollingTimers = {};
        this.ssrMode = false;
        this.queryManager = queryManager;
        this.ssrMode = ssrMode || false;
    }
    QueryScheduler.prototype.checkInFlight = function (queryId) {
        var query = this.queryManager.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].ready &&
            query.networkStatus !== _core_networkStatus__WEBPACK_IMPORTED_MODULE_2__["NetworkStatus"].error);
    };
    QueryScheduler.prototype.fetchQuery = function (queryId, options, fetchType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queryManager
                .fetchQuery(queryId, options, fetchType)
                .then(function (result) {
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    QueryScheduler.prototype.startPollingQuery = function (options, queryId, listener) {
        if (!options.pollInterval) {
            throw new Error('Attempted to start a polling query without a polling interval.');
        }
        if (this.ssrMode)
            return queryId;
        this.registeredQueries[queryId] = options;
        if (listener) {
            this.queryManager.addQueryListener(queryId, listener);
        }
        this.addQueryOnInterval(queryId, options);
        return queryId;
    };
    QueryScheduler.prototype.stopPollingQuery = function (queryId) {
        delete this.registeredQueries[queryId];
    };
    QueryScheduler.prototype.fetchQueriesOnInterval = function (interval) {
        var _this = this;
        this.intervalQueries[interval] = this.intervalQueries[interval].filter(function (queryId) {
            if (!(_this.registeredQueries.hasOwnProperty(queryId) &&
                _this.registeredQueries[queryId].pollInterval === interval)) {
                return false;
            }
            if (_this.checkInFlight(queryId)) {
                return true;
            }
            var queryOptions = _this.registeredQueries[queryId];
            var pollingOptions = __assign({}, queryOptions);
            pollingOptions.fetchPolicy = 'network-only';
            _this.fetchQuery(queryId, pollingOptions, _core_types__WEBPACK_IMPORTED_MODULE_0__["FetchType"].poll).catch(function () { });
            return true;
        });
        if (this.intervalQueries[interval].length === 0) {
            clearInterval(this.pollingTimers[interval]);
            delete this.intervalQueries[interval];
        }
    };
    QueryScheduler.prototype.addQueryOnInterval = function (queryId, queryOptions) {
        var _this = this;
        var interval = queryOptions.pollInterval;
        if (!interval) {
            throw new Error("A poll interval is required to start polling query with id '" + queryId + "'.");
        }
        if (this.intervalQueries.hasOwnProperty(interval.toString()) &&
            this.intervalQueries[interval].length > 0) {
            this.intervalQueries[interval].push(queryId);
        }
        else {
            this.intervalQueries[interval] = [queryId];
            this.pollingTimers[interval] = setInterval(function () {
                _this.fetchQueriesOnInterval(interval);
            }, interval);
        }
    };
    QueryScheduler.prototype.registerPollingQuery = function (queryOptions) {
        if (!queryOptions.pollInterval) {
            throw new Error('Attempted to register a non-polling query with the scheduler.');
        }
        return new _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]({
            scheduler: this,
            options: queryOptions,
        });
    };
    return QueryScheduler;
}());

//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ "./node_modules/apollo-client/util/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/apollo-client/util/Observable.js ***!
  \*******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Observable = (function (_super) {
    __extends(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
        return this;
    };
    Observable.prototype['@@observable'] = function () {
        return this;
    };
    return Observable;
}(apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/apollo-client/version.js":
/*!***********************************************!*\
  !*** ./node_modules/apollo-client/version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.version = "2.4.2"

/***/ }),

/***/ "./node_modules/apollo-link-dedup/lib/dedupLink.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-link-dedup/lib/dedupLink.js ***!
  \*********************************************************/
/*! exports provided: DedupLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DedupLink", function() { return DedupLink; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*
 * Expects context to contain the forceFetch field if no dedup
 */
var DedupLink = /** @class */ (function (_super) {
    __extends(DedupLink, _super);
    function DedupLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inFlightRequestObservables = new Map();
        _this.subscribers = new Map();
        return _this;
    }
    DedupLink.prototype.request = function (operation, forward) {
        var _this = this;
        // sometimes we might not want to deduplicate a request, for example when we want to force fetch it.
        if (operation.getContext().forceFetch) {
            return forward(operation);
        }
        var key = operation.toKey();
        var cleanup = function (operationKey) {
            _this.inFlightRequestObservables.delete(operationKey);
            var prev = _this.subscribers.get(operationKey);
            return prev;
        };
        if (!this.inFlightRequestObservables.get(key)) {
            // this is a new request, i.e. we haven't deduplicated it yet
            // call the next link
            var singleObserver_1 = forward(operation);
            var subscription_1;
            var sharedObserver = new apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                // this will still be called by each subscriber regardless of
                // deduplication status
                var prev = _this.subscribers.get(key);
                if (!prev)
                    prev = { next: [], error: [], complete: [] };
                _this.subscribers.set(key, {
                    next: prev.next.concat([observer.next.bind(observer)]),
                    error: prev.error.concat([observer.error.bind(observer)]),
                    complete: prev.complete.concat([observer.complete.bind(observer)]),
                });
                if (!subscription_1) {
                    subscription_1 = singleObserver_1.subscribe({
                        next: function (result) {
                            var previous = cleanup(key);
                            _this.subscribers.delete(key);
                            if (previous) {
                                previous.next.forEach(function (next) { return next(result); });
                                previous.complete.forEach(function (complete) { return complete(); });
                            }
                        },
                        error: function (error) {
                            var previous = cleanup(key);
                            _this.subscribers.delete(key);
                            if (previous)
                                previous.error.forEach(function (err) { return err(error); });
                        },
                    });
                }
                return function () {
                    if (subscription_1)
                        subscription_1.unsubscribe();
                    _this.inFlightRequestObservables.delete(key);
                };
            });
            this.inFlightRequestObservables.set(key, sharedObserver);
        }
        // return shared Observable
        return this.inFlightRequestObservables.get(key);
    };
    return DedupLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]));

//# sourceMappingURL=dedupLink.js.map

/***/ }),

/***/ "./node_modules/apollo-link-dedup/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-link-dedup/lib/index.js ***!
  \*****************************************************/
/*! exports provided: DedupLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dedupLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dedupLink */ "./node_modules/apollo-link-dedup/lib/dedupLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DedupLink", function() { return _dedupLink__WEBPACK_IMPORTED_MODULE_0__["DedupLink"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-link/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/apollo-link/lib/index.js ***!
  \***********************************************/
/*! exports provided: createOperation, makePromise, toPromise, fromPromise, fromError, Observable, empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./node_modules/apollo-link/lib/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["execute"]; });

/* harmony import */ var _linkUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkUtils */ "./node_modules/apollo-link/lib/linkUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return _linkUtils__WEBPACK_IMPORTED_MODULE_1__["createOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return _linkUtils__WEBPACK_IMPORTED_MODULE_1__["makePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _linkUtils__WEBPACK_IMPORTED_MODULE_1__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _linkUtils__WEBPACK_IMPORTED_MODULE_1__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _linkUtils__WEBPACK_IMPORTED_MODULE_1__["fromError"]; });

/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_2__["default"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-link/lib/link.js":
/*!**********************************************!*\
  !*** ./node_modules/apollo-link/lib/link.js ***!
  \**********************************************/
/*! exports provided: empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/index.js");
/* harmony import */ var _linkUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkUtils */ "./node_modules/apollo-link/lib/linkUtils.js");


var passthrough = function (op, forward) { return (forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()); };
var toLink = function (handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
};
var empty = function () {
    return new ApolloLink(function (op, forward) { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
};
var from = function (links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
};
var split = function (test, left, right) {
    if (right === void 0) { right = new ApolloLink(passthrough); }
    var leftLink = toLink(left);
    var rightLink = toLink(right);
    if (Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["isTerminating"])(leftLink) && Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["isTerminating"])(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
};
// join two Links together
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["isTerminating"])(firstLink)) {
        console.warn(new _linkUtils__WEBPACK_IMPORTED_MODULE_1__["LinkError"]("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["isTerminating"])(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = /** @class */ (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        if (right === void 0) { right = new ApolloLink(passthrough); }
        return this.concat(split(test, left, right));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw new Error('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());

function execute(link, operation) {
    return (link.request(Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["createOperation"])(operation.context, Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["transformOperation"])(Object(_linkUtils__WEBPACK_IMPORTED_MODULE_1__["validateOperation"])(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/apollo-link/lib/linkUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/apollo-link/lib/linkUtils.js ***!
  \***************************************************/
/*! exports provided: validateOperation, LinkError, isTerminating, toPromise, makePromise, fromPromise, fromError, transformOperation, createOperation, getKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return validateOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkError", function() { return LinkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTerminating", function() { return isTerminating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return transformOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/index.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw new Error("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = /** @class */ (function (_super) {
    __extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));

function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    console.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
// backwards compat
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_1__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_1__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    // best guess at an operation name
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = __assign({}, context, next(context));
        }
        else {
            context = __assign({}, context, next);
        }
    };
    var getContext = function () { return (__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    // XXX we're assuming here that variables will be serialized in the same order.
    // that might not always be true
    return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}
//# sourceMappingURL=linkUtils.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/directives.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/directives.js ***!
  \*********************************************************/
/*! exports provided: getDirectiveInfoFromField, shouldInclude, flattenSelections, getDirectiveNames, hasDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenSelections", function() { return flattenSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = Object(_storeUtils__WEBPACK_IMPORTED_MODULE_0__["argumentsObjectFromField"])(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directiveArguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
function flattenSelections(selection) {
    if (!selection.selectionSet ||
        !(selection.selectionSet.selections.length > 0))
        return [selection];
    return [selection].concat(selection.selectionSet.selections
        .map(function (selectionNode) {
        return [selectionNode].concat(flattenSelections(selectionNode));
    })
        .reduce(function (selections, selected) { return selections.concat(selected); }, []));
}
function getDirectiveNames(doc) {
    var directiveNames = doc.definitions
        .filter(function (definition) {
        return definition.selectionSet && definition.selectionSet.selections;
    })
        .map(function (x) { return flattenSelections(x); })
        .reduce(function (selections, selected) { return selections.concat(selected); }, [])
        .filter(function (selection) {
        return selection.directives && selection.directives.length > 0;
    })
        .map(function (selection) { return selection.directives; })
        .reduce(function (directives, directive) { return directives.concat(directive); }, [])
        .map(function (directive) { return directive.name.value; });
    return directiveNames;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/fragments.js":
/*!********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/fragments.js ***!
  \********************************************************/
/*! exports provided: getFragmentQueryDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        if (fragments.length !== 1) {
            throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        }
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/getFromAST.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/getFromAST.js ***!
  \*********************************************************/
/*! exports provided: getMutationDefinition, checkDocument, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, createFragmentMap, getDefaultValues, variablesInOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assign */ "./node_modules/apollo-utilities/lib/util/assign.js");
/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");


function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
    if (!mutationDef) {
        throw new Error('Must contain a mutation definition.');
    }
    return mutationDef;
}
function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
    if (operations.length > 1) {
        throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
    if (!def) {
        throw new Error("GraphQL document is missing an operation");
    }
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    if (!queryDef || queryDef.operation !== 'query') {
        throw new Error('Must contain a query definition.');
    }
    return queryDef;
}
function getFragmentDefinition(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    if (doc.definitions.length > 1) {
        throw new Error('Fragment must have exactly one definition.');
    }
    var fragmentDef = doc.definitions[0];
    if (fragmentDef.kind !== 'FragmentDefinition') {
        throw new Error('Must be a fragment definition.');
    }
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__["valueToObjectRepresentation"])(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return _util_assign__WEBPACK_IMPORTED_MODULE_0__["assign"].apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/index.js ***!
  \****************************************************/
/*! exports provided: getDirectiveInfoFromField, shouldInclude, flattenSelections, getDirectiveNames, hasDirectives, getFragmentQueryDocument, getMutationDefinition, checkDocument, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, createFragmentMap, getDefaultValues, variablesInOperation, removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, getDirectivesFromDocument, isScalarValue, isNumberValue, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, isField, isInlineFragment, isIdValue, toIdValue, isJsonValue, valueFromNode, assign, cloneDeep, getEnv, isEnv, isProduction, isDevelopment, isTest, tryFunctionOrLogError, graphQLResultHasError, isEqual, maybeDeepFreeze, warnOnceInDevelopment, stripSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/apollo-utilities/lib/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["getDirectiveInfoFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["shouldInclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenSelections", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["flattenSelections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["getDirectiveNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["hasDirectives"]; });

/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./node_modules/apollo-utilities/lib/fragments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return _fragments__WEBPACK_IMPORTED_MODULE_1__["getFragmentQueryDocument"]; });

/* harmony import */ var _getFromAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFromAST */ "./node_modules/apollo-utilities/lib/getFromAST.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getMutationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["checkDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinitionOrDie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getQueryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getMainDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return _getFromAST__WEBPACK_IMPORTED_MODULE_2__["variablesInOperation"]; });

/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform */ "./node_modules/apollo-utilities/lib/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeDirectivesFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["addTypenameToDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["removeConnectionDirectiveFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["getDirectivesFromDocument"]; });

/* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storeUtils */ "./node_modules/apollo-utilities/lib/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isScalarValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isNumberValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["valueToObjectRepresentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["storeKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["getStoreKeyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["argumentsObjectFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["resultKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isInlineFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["toIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["isJsonValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return _storeUtils__WEBPACK_IMPORTED_MODULE_4__["valueFromNode"]; });

/* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/assign */ "./node_modules/apollo-utilities/lib/util/assign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _util_assign__WEBPACK_IMPORTED_MODULE_5__["assign"]; });

/* harmony import */ var _util_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/cloneDeep */ "./node_modules/apollo-utilities/lib/util/cloneDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return _util_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"]; });

/* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/environment */ "./node_modules/apollo-utilities/lib/util/environment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["getEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isProduction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isDevelopment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return _util_environment__WEBPACK_IMPORTED_MODULE_7__["isTest"]; });

/* harmony import */ var _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/errorHandling */ "./node_modules/apollo-utilities/lib/util/errorHandling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__["tryFunctionOrLogError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return _util_errorHandling__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"]; });

/* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/isEqual */ "./node_modules/apollo-utilities/lib/util/isEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _util_isEqual__WEBPACK_IMPORTED_MODULE_9__["isEqual"]; });

/* harmony import */ var _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/maybeDeepFreeze */ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_10__["maybeDeepFreeze"]; });

/* harmony import */ var _util_warnOnce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/warnOnce */ "./node_modules/apollo-utilities/lib/util/warnOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return _util_warnOnce__WEBPACK_IMPORTED_MODULE_11__["warnOnceInDevelopment"]; });

/* harmony import */ var _util_stripSymbols__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/stripSymbols */ "./node_modules/apollo-utilities/lib/util/stripSymbols.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return _util_stripSymbols__WEBPACK_IMPORTED_MODULE_12__["stripSymbols"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/storeUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/storeUtils.js ***!
  \*********************************************************/
/*! exports provided: isScalarValue, isNumberValue, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, isField, isInlineFragment, isIdValue, toIdValue, isJsonValue, valueFromNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject && idObject.type === 'id';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) { generated = false; }
    return __assign({ type: 'id', generated: generated }, (typeof idConfig === 'string'
        ? { id: idConfig, typename: undefined }
        : idConfig));
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw new Error("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/transform.js":
/*!********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/transform.js ***!
  \********************************************************/
/*! exports provided: removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, getDirectivesFromDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony import */ var _util_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/cloneDeep */ "./node_modules/apollo-utilities/lib/util/cloneDeep.js");
/* harmony import */ var _getFromAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFromAST */ "./node_modules/apollo-utilities/lib/getFromAST.js");


var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isNotEmpty(op, fragments) {
    return (op.selectionSet.selections.filter(function (selectionSet) {
        return !(selectionSet &&
            selectionSet.kind === 'FragmentSpread' &&
            !isNotEmpty(fragments[selectionSet.name.value], fragments));
    }).length > 0);
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            if (dir.name && dir.name === directive.name.value)
                return true;
            if (dir.test && dir.test(directive))
                return true;
            return false;
        });
    };
}
function addTypenameToSelectionSet(selectionSet, isRoot) {
    if (isRoot === void 0) { isRoot = false; }
    if (selectionSet.selections) {
        if (!isRoot) {
            var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                return (selection.kind === 'Field' &&
                    selection.name.value === '__typename');
            });
            if (!alreadyHasThisField) {
                selectionSet.selections.push(TYPENAME_FIELD);
            }
        }
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field') {
                if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                    selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
            else if (selection.kind === 'InlineFragment') {
                if (selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
        });
    }
}
function removeDirectivesFromSelectionSet(directives, selectionSet) {
    if (!selectionSet.selections)
        return selectionSet;
    var agressiveRemove = directives.some(function (dir) { return dir.remove; });
    selectionSet.selections = selectionSet.selections
        .map(function (selection) {
        if (selection.kind !== 'Field' ||
            !selection ||
            !selection.directives)
            return selection;
        var directiveMatcher = getDirectiveMatcher(directives);
        var remove;
        selection.directives = selection.directives.filter(function (directive) {
            var shouldKeep = !directiveMatcher(directive);
            if (!remove && !shouldKeep && agressiveRemove)
                remove = true;
            return shouldKeep;
        });
        return remove ? null : selection;
    })
        .filter(function (x) { return !!x; });
    selectionSet.selections.forEach(function (selection) {
        if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            removeDirectivesFromSelectionSet(directives, selection.selectionSet);
        }
    });
    return selectionSet;
}
function removeDirectivesFromDocument(directives, doc) {
    var docClone = Object(_util_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(doc);
    docClone.definitions.forEach(function (definition) {
        removeDirectivesFromSelectionSet(directives, definition.selectionSet);
    });
    var operation = Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinitionOrDie"])(docClone);
    var fragments = Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"])(Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["getFragmentDefinitions"])(docClone));
    return isNotEmpty(operation, fragments) ? docClone : null;
}
function addTypenameToDocument(doc) {
    Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["checkDocument"])(doc);
    var docClone = Object(_util_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(doc);
    docClone.definitions.forEach(function (definition) {
        var isRoot = definition.kind === 'OperationDefinition';
        addTypenameToSelectionSet(definition.selectionSet, isRoot);
    });
    return docClone;
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                console.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["checkDocument"])(doc);
    return removeDirectivesFromDocument([connectionRemoveConfig], doc);
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!(selectionSet && selectionSet.selections)) {
        return false;
    }
    var matchedSelections = selectionSet.selections.filter(function (selection) {
        return hasDirectivesInSelection(directives, selection, nestedCheck);
    });
    return matchedSelections.length > 0;
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (selection.kind !== 'Field' || !selection) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    var directiveMatcher = getDirectiveMatcher(directives);
    var matchedDirectives = selection.directives.filter(directiveMatcher);
    return (matchedDirectives.length > 0 ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getDirectivesFromSelectionSet(directives, selectionSet) {
    selectionSet.selections = selectionSet.selections
        .filter(function (selection) {
        return hasDirectivesInSelection(directives, selection, true);
    })
        .map(function (selection) {
        if (hasDirectivesInSelection(directives, selection, false)) {
            return selection;
        }
        if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            selection.selectionSet = getDirectivesFromSelectionSet(directives, selection.selectionSet);
        }
        return selection;
    });
    return selectionSet;
}
function getDirectivesFromDocument(directives, doc, includeAllFragments) {
    if (includeAllFragments === void 0) { includeAllFragments = false; }
    Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["checkDocument"])(doc);
    var docClone = Object(_util_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(doc);
    docClone.definitions = docClone.definitions.map(function (definition) {
        if ((definition.kind === 'OperationDefinition' ||
            (definition.kind === 'FragmentDefinition' && !includeAllFragments)) &&
            definition.selectionSet) {
            definition.selectionSet = getDirectivesFromSelectionSet(directives, definition.selectionSet);
        }
        return definition;
    });
    var operation = Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinitionOrDie"])(docClone);
    var fragments = Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"])(Object(_getFromAST__WEBPACK_IMPORTED_MODULE_1__["getFragmentDefinitions"])(docClone));
    return isNotEmpty(operation, fragments) ? docClone : null;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/assign.js ***!
  \**********************************************************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/cloneDeep.js":
/*!*************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/cloneDeep.js ***!
  \*************************************************************/
/*! exports provided: cloneDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony import */ var fclone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fclone */ "./node_modules/fclone/dist/fclone.js");
/* harmony import */ var fclone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fclone__WEBPACK_IMPORTED_MODULE_0__);

function cloneDeep(value) {
    return fclone__WEBPACK_IMPORTED_MODULE_0___default()(value);
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/environment.js":
/*!***************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/environment.js ***!
  \***************************************************************/
/*! exports provided: getEnv, isEnv, isProduction, isDevelopment, isTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/errorHandling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/errorHandling.js ***!
  \*****************************************************************/
/*! exports provided: tryFunctionOrLogError, graphQLResultHasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/isEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/isEqual.js ***!
  \***********************************************************/
/*! exports provided: isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (!Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=isEqual.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js ***!
  \*******************************************************************/
/*! exports provided: maybeDeepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/apollo-utilities/lib/util/environment.js");

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isDevelopment"])() || Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isTest"])()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) {
            return deepFreeze(obj);
        }
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/stripSymbols.js":
/*!****************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/stripSymbols.js ***!
  \****************************************************************/
/*! exports provided: stripSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}
//# sourceMappingURL=stripSymbols.js.map

/***/ }),

/***/ "./node_modules/apollo-utilities/lib/util/warnOnce.js":
/*!************************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/util/warnOnce.js ***!
  \************************************************************/
/*! exports provided: warnOnceInDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/apollo-utilities/lib/util/environment.js");

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isProduction"])()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!Object(_environment__WEBPACK_IMPORTED_MODULE_0__["isTest"])()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}
//# sourceMappingURL=warnOnce.js.map

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fast-json-stable-stringify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fast-json-stable-stringify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ "./node_modules/fclone/dist/fclone.js":
/*!********************************************!*\
  !*** ./node_modules/fclone/dist/fclone.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
  'use strict';

// see if it looks and smells like an iterable object, and do accept length === 0

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function isArrayLike(item) {
  if (Array.isArray(item)) return true;

  var len = item && item.length;
  return typeof len === 'number' && (len === 0 || len - 1 in item) && typeof item.indexOf === 'function';
}

function fclone(obj, refs) {
  if (!obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(obj)) {
    return new Buffer(obj);
  }

  // typed array Int32Array etc.
  if (typeof obj.subarray === 'function' && /[A-Z][A-Za-z\d]+Array/.test(Object.prototype.toString.call(obj))) {
    return obj.subarray(0);
  }

  if (!refs) {
    refs = [];
  }

  if (isArrayLike(obj)) {
    refs[refs.length] = obj;
    var _l = obj.length;
    var i = -1;
    var _copy = [];

    while (_l > ++i) {
      _copy[i] = ~refs.indexOf(obj[i]) ? '[Circular]' : fclone(obj[i], refs);
    }

    refs.length && refs.length--;
    return _copy;
  }

  refs[refs.length] = obj;
  var copy = {};

  if (obj instanceof Error) {
    copy.name = obj.name;
    copy.message = obj.message;
    copy.stack = obj.stack;
  }

  var keys = Object.keys(obj);
  var l = keys.length;

  while (l--) {
    var k = keys[l];
    copy[k] = ~refs.indexOf(obj[k]) ? '[Circular]' : fclone(obj[k], refs);
  }

  refs.length && refs.length--;
  return copy;
}

fclone.default = fclone;
  return fclone
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony import */ var _printError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printError */ "./node_modules/graphql/error/printError.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */


function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions || originalError && originalError.extensions;

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return Object(_printError__WEBPACK_IMPORTED_MODULE_0__["printError"])(this);
    }
  }
});

/***/ }),

/***/ "./node_modules/graphql/error/formatError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/formatError.mjs ***!
  \****************************************************/
/*! exports provided: formatError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return formatError; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Received null or undefined error.') : void 0;
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}

/***/ }),

/***/ "./node_modules/graphql/error/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/error/index.mjs ***!
  \**********************************************/
/*! exports provided: GraphQLError, syntaxError, locatedError, printError, formatError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]; });

/* harmony import */ var _syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"]; });

/* harmony import */ var _locatedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _locatedError__WEBPACK_IMPORTED_MODULE_2__["locatedError"]; });

/* harmony import */ var _printError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printError */ "./node_modules/graphql/error/printError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _printError__WEBPACK_IMPORTED_MODULE_3__["printError"]; });

/* harmony import */ var _formatError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatError */ "./node_modules/graphql/error/formatError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _formatError__WEBPACK_IMPORTED_MODULE_4__["formatError"]; });

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */






/***/ }),

/***/ "./node_modules/graphql/error/locatedError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/locatedError.mjs ***!
  \*****************************************************/
/*! exports provided: locatedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return locatedError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */


/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}

/***/ }),

/***/ "./node_modules/graphql/error/printError.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/error/printError.mjs ***!
  \***************************************************/
/*! exports provided: printError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */


/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];

  if (error.nodes) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = error.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;

        if (node.loc) {
          printedLocations.push(highlightSourceAtLocation(node.loc.source, Object(_language_location__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(node.loc.source, node.loc.start)));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (error.source && error.locations) {
    var source = error.source;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = error.locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var location = _step2.value;
        printedLocations.push(highlightSourceAtLocation(source, location));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}
/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */

function highlightSourceAtLocation(source, location) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location.line + lineOffset;
  var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]], ["".concat(lineNum, ": "), lines[lineIndex]], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = existingLines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref4 = _step3.value;
      var prefix = _ref4[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToStringTag.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyToStringTag; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The `applyToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method applyToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function applyToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Used to print values in error messages.
 */
function inspect(value) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value) {
        if (typeof value.inspect === 'function') {
          return value.inspect();
        } else if (Array.isArray(value)) {
          return '[' + value.map(inspect).join(', ') + ']';
        }

        var properties = Object.keys(value).map(function (k) {
          return "".concat(k, ": ").concat(inspect(value[k]));
        }).join(', ');
        return properties ? '{ ' + properties + ' }' : '{}';
      }

      return String(value);

    default:
      return String(value);
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),

/***/ "./node_modules/graphql/language/blockStringValue.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/language/blockStringValue.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blockStringValue; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: createLexer, TokenKind, getTokenDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return createLexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenDesc", function() { return getTokenDesc; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error */ "./node_modules/graphql/error/index.mjs");
/* harmony import */ var _blockStringValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockStringValue */ "./node_modules/graphql/language/blockStringValue.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */


/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}
var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev);
      }

      return readString(source, pos, line, col, prev);
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = charCodeAt.call(body, position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = charCodeAt.call(body, ++position);

    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }

    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));

          if (charCode < 0) {
            throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Invalid character escape sequence: ' + "\\u".concat(body.slice(position + 1, position + 5), "."));
          }

          value += String.fromCharCode(charCode);
          position += 4;
          break;

        default:
          throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockStringValue__WEBPACK_IMPORTED_MODULE_1__["default"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    } // Escape Triple-Quote (\""")


    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}

/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType, parseConstValue, parseTypeReference, parseNamedType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseConstValue", function() { return parseConstValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTypeReference", function() { return parseTypeReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNamedType", function() { return parseNamedType; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/graphql/error/index.mjs");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */






/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;

  if (!(sourceObj instanceof _source__WEBPACK_IMPORTED_MODULE_1__["Source"])) {
    throw new TypeError("Must provide Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
  }

  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["createLexer"])(sourceObj, options || {});
  return parseDocument(lexer);
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;
  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["createLexer"])(sourceObj, options || {});
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;
  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["createLexer"])(sourceObj, options || {});
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return type;
}
/**
 * Converts a name lex token into a name parse node.
 */

function parseName(lexer) {
  var token = expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
} // Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */


function parseDocument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DOCUMENT,
    definitions: many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF, parseDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF),
    loc: loc(lexer, start)
  };
}
/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 *   - TypeSystemExtension
 */


function parseDefinition(lexer) {
  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);

      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'directive':
        return parseTypeSystemDefinition(lexer);

      case 'extend':
        return parseTypeSystemExtension(lexer);
    }
  } else if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}
/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */


function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
} // Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */


function parseOperationDefinition(lexer) {
  var start = lexer.token;

  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  var operation = parseOperationType(lexer);
  var name;

  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
    name = parseName(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * OperationType : one of query mutation subscription
 */


function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);

  switch (operationToken.value) {
    case 'query':
      return 'query';

    case 'mutation':
      return 'mutation';

    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}
/**
 * VariableDefinitions : ( VariableDefinition+ )
 */


function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, parseVariableDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R) : [];
}
/**
 * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
 */


function parseVariableDefinition(lexer) {
  var start = lexer.token;

  if (lexer.options.experimentalVariableDefinitionDirectives) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE_DEFINITION,
      variable: parseVariable(lexer),
      type: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), parseTypeReference(lexer)),
      defaultValue: skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? parseValueLiteral(lexer, true) : undefined,
      directives: parseDirectives(lexer, true),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    loc: loc(lexer, start)
  };
}
/**
 * Variable : $ Name
 */


function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * SelectionSet : { Selection+ }
 */


function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SELECTION_SET,
    selections: many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseSelection, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R),
    loc: loc(lexer, start)
  };
}
/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */


function parseSelection(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD) ? parseFragment(lexer) : parseField(lexer);
}
/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */


function parseField(lexer) {
  var start = lexer.token;
  var nameOrAlias = parseName(lexer);
  var alias;
  var name;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}
/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */


function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, item, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R) : [];
}
/**
 * Argument[Const] : Name : Value[?Const]
 */


function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */


function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD);

  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }

  var typeCondition;

  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */


function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment'); // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentName : Name but not `on`
 */


function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }

  return parseName(lexer);
} // Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */


function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;

  switch (token.kind) {
    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L:
      return parseList(lexer, isConst);

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L:
      return parseObject(lexer, isConst);

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].INT:
      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].FLOAT:
      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING:
    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING:
      return parseStringLiteral(lexer);

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL,
          loc: loc(lexer, token)
        };
      }

      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }

      break;
  }

  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING,
    value: token.value,
    block: token.kind === _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}
/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */


function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST,
    values: any(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L, item, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R),
    loc: loc(lexer, start)
  };
}
/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */


function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L);
  var fields = [];

  while (!skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectField[Const] : Name : Value[?Const]
 */


function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */


function parseDirectives(lexer, isConst) {
  var directives = [];

  while (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT)) {
    directives.push(parseDirective(lexer, isConst));
  }

  return directives;
}
/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */


function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */


function parseTypeReference(lexer) {
  var start = lexer.token;
  var type;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R);
    type = {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG)) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }

  return type;
}
/**
 * NamedType : Name
 */

function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */

function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);

      case 'scalar':
        return parseScalarTypeDefinition(lexer);

      case 'type':
        return parseObjectTypeDefinition(lexer);

      case 'interface':
        return parseInterfaceTypeDefinition(lexer);

      case 'union':
        return parseUnionTypeDefinition(lexer);

      case 'enum':
        return parseEnumTypeDefinition(lexer);

      case 'input':
        return parseInputObjectTypeDefinition(lexer);

      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING) || peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING);
}
/**
 * Description : StringValue
 */


function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}
/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */


function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseOperationTypeDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * OperationTypeDefinition : OperationType : NamedType
 */


function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */


function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */


function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */


function parseImplementsInterfaces(lexer) {
  var types = [];

  if (lexer.token.value === 'implements') {
    lexer.advance(); // Optional leading ampersand

    skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP);

    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP) || // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME));
  }

  return types;
}
/**
 * FieldsDefinition : { FieldDefinition+ }
 */


function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) && lexer.lookahead().kind === _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }

  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseFieldDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) : [];
}
/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */


function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */


function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L)) {
    return [];
  }

  return many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, parseInputValueDef, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
}
/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */


function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
  var type = parseTypeReference(lexer);
  var defaultValue;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }

  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */


function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */


function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */


function parseUnionMemberTypes(lexer) {
  var types = [];

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS)) {
    // Optional leading pipe
    skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE);

    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE));
  }

  return types;
}
/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */


function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */


function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseEnumValueDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) : [];
}
/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */


function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */


function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */


function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseInputValueDef, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) : [];
}
/**
 * TypeSystemExtension :
 *   - SchemaExtension
 *   - TypeExtension
 *
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaExtension(lexer);

      case 'scalar':
        return parseScalarTypeExtension(lexer);

      case 'type':
        return parseObjectTypeExtension(lexer);

      case 'interface':
        return parseInterfaceTypeExtension(lexer);

      case 'union':
        return parseUnionTypeExtension(lexer);

      case 'enum':
        return parseEnumTypeExtension(lexer);

      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}
/**
 * SchemaExtension :
 *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
 *  - extend schema Directives[Const]
 */


function parseSchemaExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, parseOperationTypeDefinition, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) : [];

  if (directives.length === 0 && operationTypes.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_EXTENSION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */


function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);

  if (directives.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */


function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */


function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */


function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);

  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */


function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);

  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */


function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */


function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */


function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE);
  var locations = [];

  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE));

  return locations;
}
/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */


function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);

  if (_directiveLocation__WEBPACK_IMPORTED_MODULE_5__["DirectiveLocation"].hasOwnProperty(name.value)) {
    return name;
  }

  throw unexpected(lexer, start);
} // Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */


function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return {
    start: this.start,
    end: this.end
  };
};
/**
 * Determines if the next token is of a given kind
 */


function peek(lexer, kind) {
  return lexer.token.kind === kind;
}
/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */


function skip(lexer, kind) {
  var match = lexer.token.kind === kind;

  if (match) {
    lexer.advance();
  }

  return match;
}
/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */


function expect(lexer, kind) {
  var token = lexer.token;

  if (token.kind === kind) {
    lexer.advance();
    return token;
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["getTokenDesc"])(token)));
}
/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */


function expectKeyword(lexer, value) {
  var token = lexer.token;

  if (token.kind === _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME && token.value === value) {
    lexer.advance();
    return token;
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["getTokenDesc"])(token)));
}
/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */


function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return Object(_error__WEBPACK_IMPORTED_MODULE_2__["syntaxError"])(lexer.source, token.start, "Unexpected ".concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["getTokenDesc"])(token)));
}
/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];

  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}
/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];

  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}

/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/*! exports provided: print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor */ "./node_modules/graphql/language/visitor.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
}
var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (args.every(function (arg) {
      return arg.indexOf('\n') === -1;
    }) ? wrap('(', join(args, ', '), ')') : wrap('(\n', indent(join(args, '\n')), '\n)')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        locations = _ref31.locations;
    return 'directive @' + name + (args.every(function (arg) {
      return arg.indexOf('\n') === -1;
    }) ? wrap('(', join(args, ', '), ')') : wrap('(\n', indent(join(args, '\n')), '\n)')) + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? "\"\"\"".concat(escaped.replace(/"$/, '"\n'), "\"\"\"") : "\"\"\"\n".concat(isDescription ? escaped : indent(escaped), "\n\"\"\"");
}

/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */



/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  _defineProperty(this, "body", void 0);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "locationOffset", void 0);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  !(this.locationOffset.line > 0) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__["default"])(Source);

/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, visitWithTypeInfo, getVisitFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return visitWithTypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = {};
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/lodash.flowright/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.flowright/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
        index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
          result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

module.exports = flowRight;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-apollo/react-apollo.browser.umd.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-apollo/react-apollo.browser.umd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js"), __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
    undefined;
}(this, (function (exports,server,apolloClient,PropTypes,React) { 'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var Trie = (function () {
        function Trie() {
            this.children = null;
            this.added = false;
        }
        Trie.prototype.has = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            var node = this;
            return keys.every(function (key) {
                var child = node.children && node.children.get(key);
                return !!(child && (node = child));
            }) && node.added;
        };
        Trie.prototype.add = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            var node = this;
            keys.forEach(function (key) {
                var map = node.children || (node.children = new Map);
                var child = map.get(key);
                if (child) {
                    node = child;
                }
                else {
                    map.set(key, node = new Trie());
                }
            });
            node.added = true;
        };
        return Trie;
    }());
    var RenderPromises = (function () {
        function RenderPromises() {
            this.queryPromises = new Map();
            this.queryGraveyard = new Trie();
        }
        RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
            var _a = queryInstance.props, query = _a.query, variables = _a.variables;
            if (!this.queryGraveyard.has(query, JSON.stringify(variables))) {
                this.queryPromises.set(queryInstance, new Promise(function (resolve) {
                    resolve(queryInstance.fetchData());
                }));
                return null;
            }
            return finish();
        };
        RenderPromises.prototype.hasPromises = function () {
            return this.queryPromises.size > 0;
        };
        RenderPromises.prototype.consumeAndAwaitPromises = function () {
            var _this = this;
            var promises = [];
            this.queryPromises.forEach(function (promise, queryInstance) {
                var _a = queryInstance.props, query = _a.query, variables = _a.variables;
                _this.queryGraveyard.add(query, JSON.stringify(variables));
                promises.push(promise);
            });
            this.queryPromises.clear();
            return Promise.all(promises);
        };
        return RenderPromises;
    }());
    function getDataFromTree(tree, context) {
        if (context === void 0) { context = {}; }
        return getMarkupFromTree({
            tree: tree,
            context: context,
            renderFunction: server.renderToStaticMarkup,
        });
    }
    function getMarkupFromTree(_a) {
        var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? server.renderToStaticMarkup : _c;
        var renderPromises = new RenderPromises();
        var RenderPromisesProvider = (function (_super) {
            __extends(RenderPromisesProvider, _super);
            function RenderPromisesProvider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RenderPromisesProvider.prototype.getChildContext = function () {
                return __assign({}, context, { renderPromises: renderPromises });
            };
            RenderPromisesProvider.prototype.render = function () {
                return tree;
            };
            RenderPromisesProvider.childContextTypes = {
                renderPromises: PropTypes.object,
            };
            return RenderPromisesProvider;
        }(React.Component));
        Object.keys(context).forEach(function (key) {
            RenderPromisesProvider.childContextTypes[key] = PropTypes.any;
        });
        function process() {
            var html = renderFunction(React.createElement(RenderPromisesProvider));
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        }
        return Promise.resolve().then(process);
    }

    var invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var ApolloConsumer = function (props, context) {
        invariant(!!context.client, "Could not find \"client\" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>");
        return props.children(context.client);
    };
    ApolloConsumer.contextTypes = {
        client: PropTypes.object.isRequired,
    };
    ApolloConsumer.propTypes = {
        children: PropTypes.func.isRequired,
    };

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$1 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var ApolloProvider = (function (_super) {
        __extends$1(ApolloProvider, _super);
        function ApolloProvider(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.operations = new Map();
            invariant$1(props.client, 'ApolloProvider was not passed a client instance. Make ' +
                'sure you pass in your client via the "client" prop.');
            if (!props.client.__operations_cache__) {
                props.client.__operations_cache__ = _this.operations;
            }
            return _this;
        }
        ApolloProvider.prototype.getChildContext = function () {
            return {
                client: this.props.client,
                operations: this.props.client.__operations_cache__,
            };
        };
        ApolloProvider.prototype.render = function () {
            return this.props.children;
        };
        ApolloProvider.propTypes = {
            client: PropTypes.object.isRequired,
            children: PropTypes.node.isRequired,
        };
        ApolloProvider.childContextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        return ApolloProvider;
    }(React.Component));

    var invariant$2 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var DocumentType;
    (function (DocumentType) {
        DocumentType[DocumentType["Query"] = 0] = "Query";
        DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
        DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
    })(DocumentType || (DocumentType = {}));
    var cache = new Map();
    function parser(document) {
        var cached = cache.get(document);
        if (cached)
            return cached;
        var variables, type, name;
        invariant$2(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
            "DocumentNode. You may need to use 'graphql-tag' or another method " +
            "to convert your operation into a document");
        var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
        var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
        var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
        var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
        invariant$2(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
            "You must include a query, subscription or mutation as well");
        invariant$2(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
            (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
            ("subscriptions and " + mutations.length + " mutations. ") +
            "You can use 'compose' to join multiple operation types to a component");
        type = queries.length ? DocumentType.Query : DocumentType.Mutation;
        if (!queries.length && !mutations.length)
            type = DocumentType.Subscription;
        var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
        invariant$2(definitions.length === 1, "react-apollo only supports one defintion per HOC. " + document + " had " +
            (definitions.length + " definitions. ") +
            "You can use 'compose' to join multiple operation types to a component");
        var definition = definitions[0];
        variables = definition.variableDefinitions || [];
        if (definition.name && definition.name.kind === 'Name') {
            name = definition.name.value;
        }
        else {
            name = 'data';
        }
        var payload = { name: name, type: type, variables: variables };
        cache.set(document, payload);
        return payload;
    }

    var invariant$3 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    function getClient(props, context) {
        var client = props.client || context.client;
        invariant$3(!!client, 'Could not find "client" in the context or passed in as a prop. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via props.');
        return client;
    }

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$1 = (undefined && undefined.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var invariant$4 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    function compact(obj) {
        return Object.keys(obj).reduce(function (acc, key) {
            if (obj[key] !== undefined) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    }
    function observableQueryFields(observable) {
        var fields = {
            variables: observable.variables,
            refetch: observable.refetch.bind(observable),
            fetchMore: observable.fetchMore.bind(observable),
            updateQuery: observable.updateQuery.bind(observable),
            startPolling: observable.startPolling.bind(observable),
            stopPolling: observable.stopPolling.bind(observable),
            subscribeToMore: observable.subscribeToMore.bind(observable),
        };
        return fields;
    }
    var Query = (function (_super) {
        __extends$2(Query, _super);
        function Query(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.previousData = {};
            _this.hasMounted = false;
            _this.startQuerySubscription = function () {
                if (_this.querySubscription)
                    return;
                var initial = _this.getQueryResult();
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: function (_a) {
                        var data = _a.data;
                        if (initial && initial.networkStatus === 7 && shallowEqual(initial.data, data)) {
                            initial = undefined;
                            return;
                        }
                        initial = undefined;
                        _this.updateCurrentData();
                    },
                    error: function (error) {
                        _this.resubscribeToQuery();
                        if (!error.hasOwnProperty('graphQLErrors'))
                            throw error;
                        _this.updateCurrentData();
                    },
                });
            };
            _this.removeQuerySubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            _this.updateCurrentData = function () {
                if (_this.hasMounted)
                    _this.forceUpdate();
            };
            _this.getQueryResult = function () {
                var data = { data: Object.create(null) };
                Object.assign(data, observableQueryFields(_this.queryObservable));
                if (_this.props.skip) {
                    data = __assign$1({}, data, { data: undefined, error: undefined, loading: false });
                }
                else {
                    var currentResult = _this.queryObservable.currentResult();
                    var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                    var error = currentResult.error;
                    if (errors && errors.length > 0) {
                        error = new apolloClient.ApolloError({ graphQLErrors: errors });
                    }
                    Object.assign(data, { loading: loading, networkStatus: networkStatus, error: error });
                    if (loading) {
                        Object.assign(data.data, _this.previousData, currentResult.data);
                    }
                    else if (error) {
                        Object.assign(data, {
                            data: (_this.queryObservable.getLastResult() || {}).data,
                        });
                    }
                    else {
                        var fetchPolicy = _this.queryObservable.options.fetchPolicy;
                        var partialRefetch = _this.props.partialRefetch;
                        if (partialRefetch &&
                            Object.keys(currentResult.data).length === 0 &&
                            partial &&
                            fetchPolicy !== 'cache-only') {
                            Object.assign(data, { loading: true, networkStatus: apolloClient.NetworkStatus.loading });
                            data.refetch();
                            return data;
                        }
                        Object.assign(data.data, currentResult.data);
                        _this.previousData = currentResult.data;
                    }
                }
                if (!_this.querySubscription) {
                    var oldRefetch_1 = data.refetch;
                    data.refetch = function (args) {
                        if (_this.querySubscription) {
                            return oldRefetch_1(args);
                        }
                        else {
                            return new Promise(function (r, f) {
                                _this.refetcherQueue = { resolve: r, reject: f, args: args };
                            });
                        }
                    };
                }
                data.client = _this.client;
                return data;
            };
            _this.client = getClient(props, context);
            _this.initializeQueryObservable(props);
            return _this;
        }
        Query.prototype.fetchData = function () {
            if (this.props.skip)
                return false;
            var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, onCompleted = _a.onCompleted, onError = _a.onError, partialRefetch = _a.partialRefetch, opts = __rest(_a, ["children", "ssr", "displayName", "skip", "client", "onCompleted", "onError", "partialRefetch"]);
            var fetchPolicy = opts.fetchPolicy;
            if (ssr === false)
                return false;
            if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
                fetchPolicy = 'cache-first';
            }
            var observable = this.client.watchQuery(__assign$1({}, opts, { fetchPolicy: fetchPolicy }));
            var result = this.queryObservable.currentResult();
            return result.loading ? observable.result() : false;
        };
        Query.prototype.componentDidMount = function () {
            this.hasMounted = true;
            if (this.props.skip)
                return;
            this.startQuerySubscription();
            if (this.refetcherQueue) {
                var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
                this.queryObservable.refetch(args)
                    .then(resolve)
                    .catch(reject);
            }
        };
        Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            if (nextProps.skip && !this.props.skip) {
                this.removeQuerySubscription();
                return;
            }
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
                return;
            }
            if (this.client !== nextClient) {
                this.client = nextClient;
                this.removeQuerySubscription();
                this.queryObservable = null;
                this.previousData = {};
                this.updateQuery(nextProps);
            }
            if (this.props.query !== nextProps.query) {
                this.removeQuerySubscription();
            }
            this.updateQuery(nextProps);
            if (nextProps.skip)
                return;
            this.startQuerySubscription();
        };
        Query.prototype.componentWillUnmount = function () {
            this.removeQuerySubscription();
            this.hasMounted = false;
        };
        Query.prototype.componentDidUpdate = function () {
            var _a = this.props, onCompleted = _a.onCompleted, onError = _a.onError;
            if (onCompleted || onError) {
                var currentResult = this.queryObservable.currentResult();
                var loading = currentResult.loading, error = currentResult.error, data = currentResult.data;
                if (onCompleted && !loading && !error) {
                    onCompleted(data);
                }
                else if (onError && !loading && error) {
                    onError(error);
                }
            }
        };
        Query.prototype.render = function () {
            var _this = this;
            var context = this.context;
            var finish = function () { return _this.props.children(_this.getQueryResult()); };
            if (context && context.renderPromises) {
                return context.renderPromises.addQueryPromise(this, finish);
            }
            return finish();
        };
        Query.prototype.extractOptsFromProps = function (props) {
            var variables = props.variables, pollInterval = props.pollInterval, fetchPolicy = props.fetchPolicy, errorPolicy = props.errorPolicy, notifyOnNetworkStatusChange = props.notifyOnNetworkStatusChange, query = props.query, _a = props.displayName, displayName = _a === void 0 ? 'Query' : _a, _b = props.context, context = _b === void 0 ? {} : _b;
            this.operation = parser(query);
            invariant$4(this.operation.type === DocumentType.Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === DocumentType.Mutation ? 'mutation' : 'subscription') + ".");
            return compact({
                variables: variables,
                pollInterval: pollInterval,
                query: query,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
                notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
                metadata: { reactComponent: { displayName: displayName } },
                context: context,
            });
        };
        Query.prototype.initializeQueryObservable = function (props) {
            var opts = this.extractOptsFromProps(props);
            this.setOperations(opts);
            this.queryObservable = this.client.watchQuery(opts);
        };
        Query.prototype.setOperations = function (props) {
            if (this.context.operations) {
                this.context.operations.set(this.operation.name, {
                    query: props.query,
                    variables: props.variables,
                });
            }
        };
        Query.prototype.updateQuery = function (props) {
            if (!this.queryObservable) {
                this.initializeQueryObservable(props);
            }
            else {
                this.setOperations(props);
            }
            this.queryObservable.setOptions(this.extractOptsFromProps(props))
                .catch(function () { return null; });
        };
        Query.prototype.resubscribeToQuery = function () {
            this.removeQuerySubscription();
            var lastError = this.queryObservable.getLastError();
            var lastResult = this.queryObservable.getLastResult();
            this.queryObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
        };
        Query.contextTypes = {
            client: PropTypes.object,
            operations: PropTypes.object,
            renderPromises: PropTypes.object,
        };
        Query.propTypes = {
            client: PropTypes.object,
            children: PropTypes.func.isRequired,
            fetchPolicy: PropTypes.string,
            notifyOnNetworkStatusChange: PropTypes.bool,
            onCompleted: PropTypes.func,
            onError: PropTypes.func,
            pollInterval: PropTypes.number,
            query: PropTypes.object.isRequired,
            variables: PropTypes.object,
            ssr: PropTypes.bool,
            partialRefetch: PropTypes.bool,
        };
        return Query;
    }(React.Component));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$2 = (undefined && undefined.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    var invariant$5 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var shallowEqual$1 = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var initialState = {
        loading: false,
        called: false,
        error: undefined,
        data: undefined,
    };
    var Mutation = (function (_super) {
        __extends$3(Mutation, _super);
        function Mutation(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.hasMounted = false;
            _this.runMutation = function (options) {
                if (options === void 0) { options = {}; }
                _this.onMutationStart();
                var mutationId = _this.generateNewMutationId();
                return _this.mutate(options)
                    .then(function (response) {
                    _this.onMutationCompleted(response, mutationId);
                    return response;
                })
                    .catch(function (e) {
                    _this.onMutationError(e, mutationId);
                    if (!_this.props.onError)
                        throw e;
                });
            };
            _this.mutate = function (options) {
                var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c;
                var mutateOptions = __assign$2({}, options);
                var refetchQueries = mutateOptions.refetchQueries || _this.props.refetchQueries;
                if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                    refetchQueries = refetchQueries.map(function (x) {
                        if (typeof x === 'string' && _this.context.operations)
                            return _this.context.operations.get(x) || x;
                        return x;
                    });
                    delete mutateOptions.refetchQueries;
                }
                var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
                delete mutateOptions.variables;
                return _this.client.mutate(__assign$2({ mutation: mutation,
                    optimisticResponse: optimisticResponse,
                    refetchQueries: refetchQueries,
                    awaitRefetchQueries: awaitRefetchQueries,
                    update: update,
                    context: context, variables: mutateVariables }, mutateOptions));
            };
            _this.onMutationStart = function () {
                if (!_this.state.loading && !_this.props.ignoreResults) {
                    _this.setState({
                        loading: true,
                        error: undefined,
                        data: undefined,
                        called: true,
                    });
                }
            };
            _this.onMutationCompleted = function (response, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
                var data = response.data, errors = response.errors;
                var error = errors && errors.length > 0 ? new apolloClient.ApolloError({ graphQLErrors: errors }) : undefined;
                var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
                if (_this.isMostRecentMutation(mutationId) && !ignoreResults) {
                    _this.setState({ loading: false, data: data, error: error }, callOncomplete);
                }
                else {
                    callOncomplete();
                }
            };
            _this.onMutationError = function (error, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var onError = _this.props.onError;
                var callOnError = function () { return (onError ? onError(error) : null); };
                if (_this.isMostRecentMutation(mutationId)) {
                    _this.setState({ loading: false, error: error }, callOnError);
                }
                else {
                    callOnError();
                }
            };
            _this.generateNewMutationId = function () {
                _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
                return _this.mostRecentMutationId;
            };
            _this.isMostRecentMutation = function (mutationId) {
                return _this.mostRecentMutationId === mutationId;
            };
            _this.verifyDocumentIsMutation = function (mutation) {
                var operation = parser(mutation);
                invariant$5(operation.type === DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === DocumentType.Query ? 'query' : 'subscription') + ".");
            };
            _this.client = getClient(props, context);
            _this.verifyDocumentIsMutation(props.mutation);
            _this.mostRecentMutationId = 0;
            _this.state = initialState;
            return _this;
        }
        Mutation.prototype.componentDidMount = function () {
            this.hasMounted = true;
        };
        Mutation.prototype.componentWillUnmount = function () {
            this.hasMounted = false;
        };
        Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual$1(this.props, nextProps) && this.client === nextClient) {
                return;
            }
            if (this.props.mutation !== nextProps.mutation) {
                this.verifyDocumentIsMutation(nextProps.mutation);
            }
            if (this.client !== nextClient) {
                this.client = nextClient;
                this.setState(initialState);
            }
        };
        Mutation.prototype.render = function () {
            var children = this.props.children;
            var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
            var result = {
                called: called,
                loading: loading,
                data: data,
                error: error,
                client: this.client,
            };
            return children(this.runMutation, result);
        };
        Mutation.contextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        Mutation.propTypes = {
            mutation: PropTypes.object.isRequired,
            variables: PropTypes.object,
            optimisticResponse: PropTypes.object,
            refetchQueries: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
                PropTypes.func,
            ]),
            awaitRefetchQueries: PropTypes.bool,
            update: PropTypes.func,
            children: PropTypes.func.isRequired,
            onCompleted: PropTypes.func,
            onError: PropTypes.func,
        };
        return Mutation;
    }(React.Component));

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var shallowEqual$2 = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/react-apollo/node_modules/fbjs/lib/shallowEqual.js");
    var invariant$6 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var Subscription = (function (_super) {
        __extends$4(Subscription, _super);
        function Subscription(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.initialize = function (props) {
                if (_this.queryObservable)
                    return;
                _this.queryObservable = _this.client.subscribe({
                    query: props.subscription,
                    variables: props.variables,
                    fetchPolicy: props.fetchPolicy,
                });
            };
            _this.startSubscription = function () {
                if (_this.querySubscription)
                    return;
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: _this.updateCurrentData,
                    error: _this.updateError,
                });
            };
            _this.getInitialState = function () { return ({
                loading: true,
                error: undefined,
                data: undefined,
            }); };
            _this.updateCurrentData = function (result) {
                var _a = _this, client = _a.client, onSubscriptionData = _a.props.onSubscriptionData;
                if (onSubscriptionData)
                    onSubscriptionData({ client: client, subscriptionData: result });
                _this.setState({
                    data: result.data,
                    loading: false,
                    error: undefined,
                });
            };
            _this.updateError = function (error) {
                _this.setState({
                    error: error,
                    loading: false,
                });
            };
            _this.endSubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            _this.client = getClient(props, context);
            _this.initialize(props);
            _this.state = _this.getInitialState();
            return _this;
        }
        Subscription.prototype.componentDidMount = function () {
            this.startSubscription();
        };
        Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            var nextClient = getClient(nextProps, nextContext);
            if (shallowEqual$2(this.props.variables, nextProps.variables) &&
                this.client === nextClient &&
                this.props.subscription === nextProps.subscription) {
                return;
            }
            var shouldResubscribe = nextProps.shouldResubscribe;
            if (typeof shouldResubscribe === 'function') {
                shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
            }
            var shouldNotResubscribe = shouldResubscribe === false;
            if (this.client !== nextClient) {
                this.client = nextClient;
            }
            if (!shouldNotResubscribe) {
                this.endSubscription();
                delete this.queryObservable;
                this.initialize(nextProps);
                this.startSubscription();
                this.setState(this.getInitialState());
                return;
            }
            this.initialize(nextProps);
            this.startSubscription();
        };
        Subscription.prototype.componentWillUnmount = function () {
            this.endSubscription();
        };
        Subscription.prototype.render = function () {
            var renderFn = this.props.children;
            if (!renderFn)
                return null;
            var result = Object.assign({}, this.state, {
                variables: this.props.variables,
            });
            return renderFn(result);
        };
        Subscription.contextTypes = {
            client: PropTypes.object.isRequired,
        };
        Subscription.propTypes = {
            subscription: PropTypes.object.isRequired,
            variables: PropTypes.object,
            children: PropTypes.func,
            onSubscriptionData: PropTypes.func,
            shouldResubscribe: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        };
        return Subscription;
    }(React.Component));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$7 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var defaultMapPropsToOptions = function () { return ({}); };
    var defaultMapPropsToSkip = function () { return false; };
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function calculateVariablesFromProps(operation, props, graphQLDisplayName, wrapperName) {
        var variables = {};
        for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
            var _b = _a[_i], variable = _b.variable, type = _b.type;
            if (!variable.name || !variable.name.value)
                continue;
            var variableName = variable.name.value;
            var variableProp = props[variableName];
            if (typeof variableProp !== 'undefined') {
                variables[variableName] = variableProp;
                continue;
            }
            if (type.kind !== 'NonNullType') {
                variables[variableName] = null;
                continue;
            }
            if (operation.type === DocumentType.Mutation)
                return;
            invariant$7(typeof variableProp !== 'undefined', "The operation '" + operation.name + "' wrapping '" + wrapperName + "' " +
                ("is expecting a variable: '" + variable.name.value + "' but it was not found in the props ") +
                ("passed to '" + graphQLDisplayName + "'"));
        }
        return variables;
    }
    var GraphQLBase = (function (_super) {
        __extends$5(GraphQLBase, _super);
        function GraphQLBase(props) {
            var _this = _super.call(this, props) || this;
            _this.withRef = false;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        GraphQLBase.prototype.getWrappedInstance = function () {
            invariant$7(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        GraphQLBase.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        return GraphQLBase;
    }(React.Component));

    var __extends$6 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$3 = (undefined && undefined.__assign) || function () {
        __assign$3 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$3.apply(this, arguments);
    };
    var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function query(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function') {
            mapPropsToOptions = function () { return options; };
        }
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function') {
            mapPropsToSkip = function () { return skip; };
        }
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$6(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : __assign$3({}, mapPropsToOptions(props));
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Query, __assign$3({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                        var _ = _a.client, data = _a.data, r = __rest$1(_a, ["client", "data"]);
                        var _b, _c;
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$3({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$3({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$7 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$4 = (undefined && undefined.__assign) || function () {
        __assign$4 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$4.apply(this, arguments);
    };
    var hoistNonReactStatics$1 = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function mutation(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$7(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var props = this.props;
                    var opts = mapPropsToOptions(props);
                    if (operationOptions.withRef) {
                        this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: this.setWrappedInstance,
                        });
                    }
                    if (!opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Mutation, __assign$4({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _result) {
                        var _a, _b;
                        var name = operationOptions.name || 'mutate';
                        var childProps = (_a = {}, _a[name] = mutate, _a);
                        if (operationOptions.props) {
                            var newResult = (_b = {},
                                _b[name] = mutate,
                                _b.ownProps = props,
                                _b);
                            childProps = operationOptions.props(newResult);
                        }
                        return React.createElement(WrappedComponent, __assign$4({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$1(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$8 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$5 = (undefined && undefined.__assign) || function () {
        __assign$5 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$5.apply(this, arguments);
    };
    var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics$2 = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function subscribe(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function')
            mapPropsToSkip = function () { return skip; };
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$8(GraphQL, _super);
                function GraphQL(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { resubscribe: false };
                    return _this;
                }
                GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                    if (!shouldResubscribe)
                        return;
                    this.setState({
                        resubscribe: shouldResubscribe(this.props, nextProps),
                    });
                };
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Subscription, __assign$5({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                        var data = _a.data, r = __rest$2(_a, ["data"]);
                        var _b, _c;
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$5({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$5({}, props, childProps));
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$2(GraphQL, WrappedComponent, {});
        };
    }

    function graphql(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        switch (parser(document).type) {
            case DocumentType.Mutation:
                return mutation(document, operationOptions);
            case DocumentType.Subscription:
                return subscribe(document, operationOptions);
            case DocumentType.Query:
            default:
                return query(document, operationOptions);
        }
    }

    var __extends$9 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$6 = (undefined && undefined.__assign) || function () {
        __assign$6 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$6.apply(this, arguments);
    };
    var invariant$8 = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
    var hoistNonReactStatics$3 = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    function getDisplayName$1(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function withApollo(WrappedComponent, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
        var WithApollo = (function (_super) {
            __extends$9(WithApollo, _super);
            function WithApollo(props) {
                var _this = _super.call(this, props) || this;
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                return _this;
            }
            WithApollo.prototype.getWrappedInstance = function () {
                invariant$8(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
                return this.wrappedInstance;
            };
            WithApollo.prototype.setWrappedInstance = function (ref) {
                this.wrappedInstance = ref;
            };
            WithApollo.prototype.render = function () {
                var _this = this;
                return (React.createElement(ApolloConsumer, null, function (client) {
                    var props = Object.assign({}, _this.props, {
                        client: client,
                        ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                    });
                    return React.createElement(WrappedComponent, __assign$6({}, props));
                }));
            };
            WithApollo.displayName = withDisplayName;
            WithApollo.WrappedComponent = WrappedComponent;
            return WithApollo;
        }(React.Component));
        return hoistNonReactStatics$3(WithApollo, WrappedComponent, {});
    }

    function getProps(element) {
        return element.props || element.attributes;
    }
    function isReactElement(element) {
        return !!element.type;
    }
    function isComponentClass(Comp) {
        return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
    }
    function providesChildContext(instance) {
        return !!instance.getChildContext;
    }
    function walkTree(element, context, visitor, newContext) {
        if (newContext === void 0) { newContext = new Map(); }
        if (!element) {
            return;
        }
        if (Array.isArray(element)) {
            element.forEach(function (item) { return walkTree(item, context, visitor, newContext); });
            return;
        }
        if (isReactElement(element)) {
            if (typeof element.type === 'function') {
                var Comp = element.type;
                var props = Object.assign({}, Comp.defaultProps, getProps(element));
                var childContext_1 = context;
                var child = void 0;
                if (isComponentClass(Comp)) {
                    var instance_1 = new Comp(props, context);
                    Object.defineProperty(instance_1, 'props', {
                        value: instance_1.props || props,
                    });
                    instance_1.context = instance_1.context || context;
                    instance_1.state = instance_1.state || null;
                    instance_1.setState = function (newState) {
                        if (typeof newState === 'function') {
                            newState = newState(instance_1.state, instance_1.props, instance_1.context);
                        }
                        instance_1.state = Object.assign({}, instance_1.state, newState);
                    };
                    if (Comp.getDerivedStateFromProps) {
                        var result = Comp.getDerivedStateFromProps(instance_1.props, instance_1.state);
                        if (result !== null) {
                            instance_1.state = Object.assign({}, instance_1.state, result);
                        }
                    }
                    else if (instance_1.UNSAFE_componentWillMount) {
                        instance_1.UNSAFE_componentWillMount();
                    }
                    else if (instance_1.componentWillMount) {
                        instance_1.componentWillMount();
                    }
                    if (providesChildContext(instance_1)) {
                        childContext_1 = Object.assign({}, context, instance_1.getChildContext());
                    }
                    if (visitor(element, instance_1, newContext, context, childContext_1) === false) {
                        return;
                    }
                    child = instance_1.render();
                }
                else {
                    if (visitor(element, null, newContext, context) === false) {
                        return;
                    }
                    child = Comp(props, context);
                }
                if (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (item) { return walkTree(item, childContext_1, visitor, newContext); });
                    }
                    else {
                        walkTree(child, childContext_1, visitor, newContext);
                    }
                }
            }
            else if (element.type._context || element.type.Consumer) {
                if (visitor(element, null, newContext, context) === false) {
                    return;
                }
                var child = void 0;
                if (!!element.type._context) {
                    newContext = new Map(newContext);
                    newContext.set(element.type, element.props.value);
                    child = element.props.children;
                }
                else {
                    var value = element.type._currentValue;
                    if (newContext.has(element.type.Provider)) {
                        value = newContext.get(element.type.Provider);
                    }
                    child = element.props.children(value);
                }
                if (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (item) { return walkTree(item, context, visitor, newContext); });
                    }
                    else {
                        walkTree(child, context, visitor, newContext);
                    }
                }
            }
            else {
                if (visitor(element, null, newContext, context) === false) {
                    return;
                }
                if (element.props && element.props.children) {
                    React.Children.forEach(element.props.children, function (child) {
                        if (child) {
                            walkTree(child, context, visitor, newContext);
                        }
                    });
                }
            }
        }
        else if (typeof element === 'string' || typeof element === 'number') {
            visitor(element, null, newContext, context);
        }
    }

    var compose = __webpack_require__(/*! lodash.flowright */ "./node_modules/lodash.flowright/index.js");

    exports.compose = compose;
    exports.getDataFromTree = getDataFromTree;
    exports.ApolloConsumer = ApolloConsumer;
    exports.ApolloProvider = ApolloProvider;
    exports.Query = Query;
    exports.Mutation = Mutation;
    exports.Subscription = Subscription;
    exports.graphql = graphql;
    exports.withApollo = withApollo;
    exports.RenderPromises = RenderPromises;
    exports.getMarkupFromTree = getMarkupFromTree;
    exports.walkTree = walkTree;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-apollo.browser.umd.js.map


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.5.2';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var _args$map = args.map(function (item) {
        return '' + item;
      }),
          a = _args$map[0],
          b = _args$map[1],
          c = _args$map[2],
          d = _args$map[3],
          e = _args$map[4],
          f = _args$map[5],
          g = _args$map[6],
          h = _args$map[7];

      var message = 'Warning: ' + format;

      // We intentionally don't use spread (or .apply) because it breaks IE9:
      // https://github.com/facebook/react/issues/13610
      switch (args.length) {
        case 0:
          console.error(message);
          break;
        case 1:
          console.error(message, a);
          break;
        case 2:
          console.error(message, a, b);
          break;
        case 3:
          console.error(message, a, b, c);
          break;
        case 4:
          console.error(message, a, b, c, d);
          break;
        case 5:
          console.error(message, a, b, c, d, e);
          break;
        case 6:
          console.error(message, a, b, c, d, e, f);
          break;
        case 7:
          console.error(message, a, b, c, d, e, f, g);
          break;
        case 8:
          console.error(message, a, b, c, d, e, f, g, h);
          break;
        default:
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
      }
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var _message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(_message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;


var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_PLACEHOLDER_TYPE = hasSymbol ? Symbol.for('react.placeholder') : 0xead1;

var Resolved = 1;




function refineResolvedThenable(thenable) {
  return thenable._reactStatus === Resolved ? thenable._reactResult : null;
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_PLACEHOLDER_TYPE:
      return 'Placeholder';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        var renderFn = type.render;
        var functionName = renderFn.displayName || renderFn.name || '';
        return type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    }
    if (typeof type.then === 'function') {
      var thenable = type;
      var resolvedThenable = refineResolvedThenable(thenable);
      if (resolvedThenable) {
        return getComponentName(resolvedThenable);
      }
    }
  }
  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
var enableSuspenseServerRenderer = false;

// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }
  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// Special case: this attribute exists both in HTML and SVG.
// Its "tabindex" attribute name is case-sensitive in SVG so we can't just use
// its React `tabIndex` name, like we do for attributes that exist only in HTML.
properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, // mustUseProperty
'tabindex', // attributeName
null);

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return '';
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactDebugCurrentFrame$1 = null;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$1.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// TODO: We can remove this if we add invariantWithStack()
// or add stack by default to invariants where possible.
var HTML = '__html';

var ReactDebugCurrentFrame$2 = null;
{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$2.getStackAddendum()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$2.getStackAddendum()) : void 0;
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
    // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */


/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    // Warn when passing the strings 'false' or 'true' into a boolean prop
    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

// This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.
var currentDebugStacks = [];

var ReactDebugCurrentFrame = void 0;
var prevGetCurrentStackImpl = null;
var getCurrentServerStackImpl = function () {
  return '';
};
var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};
var pushCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var popCurrentDebugStack = function () {};

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1];
    // Take the innermost executing frame (e.g. <Foo>),
    var frame = stack[stack.length - 1];
    // and record that it has one more element associated with it.
    frame.debugElementStack.push(element);
    // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    }
    // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.
    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = '';
    // Go through every frame in the stack from the innermost one.
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};
var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    content += child;
    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', getCurrentServerStackImpl);
  }
}

function processContext(type, context) {
  var maskedContext = maskContext(type, context);
  {
    if (type.contextTypes) {
      checkContextTypes(type.contextTypes, maskedContext, 'context');
    }
  }
  return maskedContext;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var publicContext = processContext(Component, context);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      inst = Component(element.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
              lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
              didWarnAboutDeprecatedWillMount[_componentName3] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      if (typeof childContextTypes === 'object') {
        childContext = inst.getChildContext();
        for (var contextKey in childContext) {
          !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
        }
      } else {
        warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
      }
    }
    if (childContext) {
      context = _assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  // DEV-only

  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;

    // Context (new API)
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    {
      this.contextProviderStack = [];
    }
  }

  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */

  // TODO: type this more strictly:


  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var previousValue = context._currentValue;

    // Remember which value to restore this context to on our way up.
    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;
    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    }

    // Mutate the current value.
    context._currentValue = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    var index = this.contextIndex;
    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index];

    // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.
    this.contextStack[index] = null;
    this.contextValueStack[index] = null;
    {
      this.contextProviderStack[index] = null;
    }
    this.contextIndex--;

    // Restore to the previous value we stored as we were walking down.
    context._currentValue = previousValue;
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var out = '';
    while (out.length < bytes) {
      if (this.stack.length === 0) {
        this.exhausted = true;
        break;
      }
      var frame = this.stack[this.stack.length - 1];
      if (frame.childIndex >= frame.children.length) {
        var _footer = frame.footer;
        out += _footer;
        if (_footer !== '') {
          this.previousWasTextNode = false;
        }
        this.stack.pop();
        if (frame.type === 'select') {
          this.currentSelectValue = null;
        } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
          var provider = frame.type;
          this.popProvider(provider);
        }
        continue;
      }
      var child = frame.children[frame.childIndex++];
      {
        pushCurrentDebugStack(this.stack);
        // We're starting work on this frame, so reset its inner stack.
        frame.debugElementStack.length = 0;
        try {
          // Be careful! Make sure this matches the PROD path below.
          out += this.render(child, frame.context, frame.domNamespace);
        } finally {
          popCurrentDebugStack();
        }
      }
    }
    return out;
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_ASYNC_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case REACT_PLACEHOLDER_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var _nextChildren2 = toArray(
              // Always use the fallback when synchronously rendering to string.
              nextChild.props.fallback);
              var _frame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              return '';
            }
          }
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;
              var _nextChildren3 = toArray(elementType.render(element.props, element.ref));
              var _frame3 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren3,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame3.debugElementStack = [];
              }
              this.stack.push(_frame3);
              return '';
            }
          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren4 = toArray(nextProps.children);
              var _frame4 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame4.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame4);
              return '';
            }
          case REACT_CONTEXT_TYPE:
            {
              var consumer = nextChild;
              var _nextProps = consumer.props;
              var nextValue = consumer.type._currentValue;

              var _nextChildren5 = toArray(_nextProps.children(nextValue));
              var _frame5 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame5.debugElementStack = [];
              }
              this.stack.push(_frame5);
              return '';
            }
          default:
            break;
        }
      }

      var info = '';
      {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);
  var markup = renderer.read(Infinity);
  return markup;
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}

function renderToNodeStream() {
  invariant(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
}

function renderToStaticNodeStream() {
  invariant(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_PLACEHOLDER_TYPE = hasSymbol ? Symbol.for('react.placeholder') : 0xead1;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_PLACEHOLDER_TYPE || typeof type === 'object' && type !== null && (typeof type.then === 'function' || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

function isAsyncMode(object) {
  return typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/index.js ***!
  \*****************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zenObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zenObservable */ "./node_modules/zen-observable-ts/lib/zenObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _zenObservable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });



/* harmony default export */ __webpack_exports__["default"] = (_zenObservable__WEBPACK_IMPORTED_MODULE_0__["Observable"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/zenObservable.js":
/*!*************************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/zenObservable.js ***!
  \*************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;
//# sourceMappingURL=zenObservable.js.map

/***/ }),

/***/ "./node_modules/zen-observable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/zen-observable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Observable.js */ "./node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "./node_modules/zen-observable/lib/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/zen-observable/lib/Observable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// === Symbol Support ===

var hasSymbols = function () {
  return typeof Symbol === 'function';
};
var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null) return undefined;

  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[getSymbol('species')];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;

  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = undefined;
  subscription._state = 'ready';
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';

  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);
    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;
      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;
      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({ type: type, value: value });
    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{ type: type, value: value }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable

    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';

    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: 'unsubscribe',
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: 'closed',
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: 'next',
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: 'error',
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: 'complete',
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: 'closed',
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = exports.Observable = function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },

          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: 'map',
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'filter',
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;

      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'concat',
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscription = void 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (sources.length === 0) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources.shift()));
              }
            }
          });
        }

        startNext(_this5);

        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: 'flatMap',
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });

            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: getSymbol('observable'),
    value: function () {
      return this;
    }
  }], [{
    key: 'from',
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;

      if (x == null) throw new TypeError(x + ' is not an object');

      var method = getMethod(x, getSymbol('observable'));
      if (method) {
        var observable = method.call(x);

        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

        if (isObservable(observable) && observable.constructor === C) return observable;

        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, getSymbol('iterator'));
        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  observer.next(item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: 'of',
    value: function of() {
      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;

      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
  }, {
    key: getSymbol('species'),
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: getSymbol('observable'),
      hostReportError: hostReportError
    },
    configurabe: true
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Items */ "./components/Items.js");
var _jsxFileName = "/Users/Philippe/Dev/JS/REACT_GRAPHQL_SITE/Advanced-React/sick-fits/frontend/pages/index.js";



var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Items__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/items.js":
/*!************************!*\
  !*** ./pages/items.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/items")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/items.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/items', function() {
module.exports = __webpack_require__(/*! ./pages/items.js */"./pages/items.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_5d62d38be3592dca3a42":
/*!*******************************************!*\
  !*** external "dll_5d62d38be3592dca3a42" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5d62d38be3592dca3a42;

/***/ })

},[[5,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=items.js.map