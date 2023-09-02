const module = (() => {
    const _CHAIN_LIST = [ "ethereum", "polygon", "binance", "klaytn" ];
    const _CHAINS = _CHAIN_LIST.reduce((chains, chain) => {
        return Object.assign(chains, {
            [chain]: require("web3/" + chain)
        });
    }, {});

    const _cached_networks = {};
    const _cached_explores = {};
    const _native_tokens = _CHAIN_LIST.reduce((tokens, chain) => {
        const token = _CHAINS[chain].get_native_token();

        return Object.assign(tokens, {
            [chain]: Object.assign(token, {
                "chain": chain,
                "network": _get_network_code(chain),
                "native": "yes"
            })
        });
    }, {});
 
    function _get_network_info(chain, network_id) {
        const chain_id = network_id || _CHAINS[chain].get_network_id().toString();
        const id = chain + "-" + chain_id;

        return _cached_networks[id] = _cached_networks[id] || _load_network(chain_id);
    }

    function _get_network_name(chain, network_id) {
        return _CHAINS[chain].get_network_name(network_id);
    }

    function _get_network_code(chain, network_id) {
        return _CHAINS[chain].get_network_name(network_id).toLowerCase();
    }

    function _get_explore_info(chain, network_id) {
        const chain_id = network_id || _CHAINS[chain].get_network_id().toString();
        const id = chain + "-" + chain_id;

        return _cached_explores[id] = _cached_explores[id] || _load_explore(chain, network_id);
    }

    function _load_network(chain_id) {
        return controller.catalog().value("collection", "networks", "C_NETWORKS_" + chain_id.toUpperCase()) || {};
    }

    function _load_explore(chain, network_id) {
        const network = _get_network_info(chain, network_id);

        return {
            "id": network["explore"],
            "name": network["explore-name"],
            "urls": {
                "account": network["explore-account-url"],
                "transaction": network["explore-transaction-url"],
            }
        }
    }

    return {
        get_web3_instance: (chain) => {
            return _CHAINS[chain];
        },

        get_chain_list: () => {
            return _CHAIN_LIST;
        },

        get_native_tokens: () => {
            return Object.values(_native_tokens);
        },

        get_native_token: (chain) => {
            return _native_tokens[chain] || {};
        },

        get_network_info: (chain, network_id) => {
            return _get_network_info(chain, network_id);
        },

        get_chain_name: (chain, network_id) => {
            return _get_network_info(chain, network_id)["name"];
        },

        get_network_name: (chain, network_id) => {
            return _get_network_name(chain, network_id);
        },

        get_network_code: (chain, network_id) => {
            return _get_network_code(chain, network_id);
        },
        
        get_explore_info: (chain, network_id) => {
            return _get_explore_info(chain, network_id);
        }
    }
})();

__MODULE__ = module;
