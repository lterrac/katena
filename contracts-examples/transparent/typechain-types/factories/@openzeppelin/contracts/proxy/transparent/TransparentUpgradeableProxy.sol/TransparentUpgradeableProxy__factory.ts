/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162001a6d38038062001a6d833981810160405281019062000029919062000748565b82816200003f828260006200005b60201b60201c565b505062000052826200009e60201b60201c565b50505062000a8a565b6200006c83620000fc60201b60201c565b6000825111806200007a5750805b1562000099576200009783836200015360201b620002991760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000cf6200018960201b60201c565b82604051620000e0929190620007d4565b60405180910390a1620000f981620001ed60201b60201c565b50565b6200010d81620002dd60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606062000181838360405180606001604052806027815260200162001a4660279139620003b360201b60201c565b905092915050565b6000620001c47fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200044560201b620002c61760201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200025f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002569062000888565b60405180910390fd5b80620002997fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200044560201b620002c61760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620002f3816200044f60201b620002d01760201c565b62000335576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200032c9062000920565b60405180910390fd5b806200036f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200044560201b620002c61760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051620003df91906200098f565b600060405180830381855af49150503d80600081146200041c576040519150601f19603f3d011682016040523d82523d6000602084013e62000421565b606091505b50915091506200043a868383876200047260201b60201c565b925050509392505050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315620004e2576000835103620004d95762000496856200044f60201b60201c565b620004d8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004cf90620009f8565b60405180910390fd5b5b829050620004f5565b620004f48383620004fd60201b60201c565b5b949350505050565b600082511115620005115781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000547919062000a66565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005918262000564565b9050919050565b620005a38162000584565b8114620005af57600080fd5b50565b600081519050620005c38162000598565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200061e82620005d3565b810181811067ffffffffffffffff8211171562000640576200063f620005e4565b5b80604052505050565b60006200065562000550565b905062000663828262000613565b919050565b600067ffffffffffffffff821115620006865762000685620005e4565b5b6200069182620005d3565b9050602081019050919050565b60005b83811015620006be578082015181840152602081019050620006a1565b60008484015250505050565b6000620006e1620006db8462000668565b62000649565b9050828152602081018484840111156200070057620006ff620005ce565b5b6200070d8482856200069e565b509392505050565b600082601f8301126200072d576200072c620005c9565b5b81516200073f848260208601620006ca565b91505092915050565b6000806000606084860312156200076457620007636200055a565b5b60006200077486828701620005b2565b93505060206200078786828701620005b2565b925050604084015167ffffffffffffffff811115620007ab57620007aa6200055f565b5b620007b98682870162000715565b9150509250925092565b620007ce8162000584565b82525050565b6000604082019050620007eb6000830185620007c3565b620007fa6020830184620007c3565b9392505050565b600082825260208201905092915050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200087060268362000801565b91506200087d8262000812565b604082019050919050565b60006020820190508181036000830152620008a38162000861565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600062000908602d8362000801565b91506200091582620008aa565b604082019050919050565b600060208201905081810360008301526200093b81620008f9565b9050919050565b600081519050919050565b600081905092915050565b6000620009658262000942565b6200097181856200094d565b9350620009838185602086016200069e565b80840191505092915050565b60006200099d828462000958565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000620009e0601d8362000801565b9150620009ed82620009a8565b602082019050919050565b6000602082019050818103600083015262000a1381620009d1565b9050919050565b600081519050919050565b600062000a328262000a1a565b62000a3e818562000801565b935062000a508185602086016200069e565b62000a5b81620005d3565b840191505092915050565b6000602082019050818103600083015262000a82818462000a25565b905092915050565b610fac8062000a9a6000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b6100256102f3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361028f576060600080357fffffffff00000000000000000000000000000000000000000000000000000000169050633659cfe660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036100dc576100d561034a565b9150610287565b634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610137576101306103a9565b9150610286565b638f28397060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036101925761018b6103f6565b9150610285565b63f851a44060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036101ed576101e6610443565b9150610284565b635c60da1b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036102485761024161047f565b9150610283565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027a906109c6565b60405180910390fd5b5b5b5b5b815160208301f35b6102976104bb565b565b60606102be8383604051806060016040528060278152602001610f50602791396104d5565b905092915050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006103217fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6102c6565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606061035461055b565b600080366004908092610369939291906109fa565b8101906103769190610a9d565b90506103938160405180602001604052806000815250600061056a565b6040518060200160405280600081525091505090565b606060008060003660049080926103c2939291906109fa565b8101906103cf9190610c10565b915091506103df8282600161056a565b604051806020016040528060008152509250505090565b606061040061055b565b600080366004908092610415939291906109fa565b8101906104229190610a9d565b905061042d81610596565b6040518060200160405280600081525091505090565b606061044d61055b565b60006104576102f3565b90508060405160200161046a9190610c8d565b60405160208183030381529060405291505090565b606061048961055b565b60006104936105e2565b9050806040516020016104a69190610c8d565b60405160208183030381529060405291505090565b6104c36105f1565b6104d36104ce6105e2565b6105f3565b565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516104ff9190610d19565b600060405180830381855af49150503d806000811461053a576040519150601f19603f3d011682016040523d82523d6000602084013e61053f565b606091505b509150915061055086838387610619565b925050509392505050565b6000341461056857600080fd5b565b6105738361068e565b6000825111806105805750805b156105915761058f8383610299565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105bf6102f3565b826040516105ce929190610d30565b60405180910390a16105df816106dd565b50565b60006105ec6107bd565b905090565b565b3660008037600080366000845af43d6000803e8060008114610614573d6000f35b3d6000fd5b6060831561067b57600083510361067357610633856102d0565b610672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066990610da5565b60405180910390fd5b5b829050610686565b6106858383610814565b5b949350505050565b61069781610864565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361074c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074390610e37565b60405180910390fd5b806107797fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6102c6565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006107eb7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6102c6565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000825111156108275781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b9190610e9b565b60405180910390fd5b61086d816102d0565b6108ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a390610f2f565b60405180910390fd5b806108d97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6102c6565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082825260208201905092915050565b7f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208201527f6574000000000000000000000000000000000000000000000000000000000000604082015250565b60006109b060428361091d565b91506109bb8261092e565b606082019050919050565b600060208201905081810360008301526109df816109a3565b9050919050565b6000604051905090565b600080fd5b600080fd5b60008085851115610a0e57610a0d6109f0565b5b83861115610a1f57610a1e6109f5565b5b6001850283019150848603905094509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a6a82610a3f565b9050919050565b610a7a81610a5f565b8114610a8557600080fd5b50565b600081359050610a9781610a71565b92915050565b600060208284031215610ab357610ab2610a35565b5b6000610ac184828501610a88565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b1d82610ad4565b810181811067ffffffffffffffff82111715610b3c57610b3b610ae5565b5b80604052505050565b6000610b4f6109e6565b9050610b5b8282610b14565b919050565b600067ffffffffffffffff821115610b7b57610b7a610ae5565b5b610b8482610ad4565b9050602081019050919050565b82818337600083830152505050565b6000610bb3610bae84610b60565b610b45565b905082815260208101848484011115610bcf57610bce610acf565b5b610bda848285610b91565b509392505050565b600082601f830112610bf757610bf6610aca565b5b8135610c07848260208601610ba0565b91505092915050565b60008060408385031215610c2757610c26610a35565b5b6000610c3585828601610a88565b925050602083013567ffffffffffffffff811115610c5657610c55610a3a565b5b610c6285828601610be2565b9150509250929050565b6000610c7782610a3f565b9050919050565b610c8781610c6c565b82525050565b6000602082019050610ca26000830184610c7e565b92915050565b600081519050919050565b600081905092915050565b60005b83811015610cdc578082015181840152602081019050610cc1565b60008484015250505050565b6000610cf382610ca8565b610cfd8185610cb3565b9350610d0d818560208601610cbe565b80840191505092915050565b6000610d258284610ce8565b915081905092915050565b6000604082019050610d456000830185610c7e565b610d526020830184610c7e565b9392505050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610d8f601d8361091d565b9150610d9a82610d59565b602082019050919050565b60006020820190508181036000830152610dbe81610d82565b9050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610e2160268361091d565b9150610e2c82610dc5565b604082019050919050565b60006020820190508181036000830152610e5081610e14565b9050919050565b600081519050919050565b6000610e6d82610e57565b610e77818561091d565b9350610e87818560208601610cbe565b610e9081610ad4565b840191505092915050565b60006020820190508181036000830152610eb58184610e62565b905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000610f19602d8361091d565b9150610f2482610ebd565b604082019050919050565b60006020820190508181036000830152610f4881610f0c565b905091905056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201dfdf1b6881f67ea42bcc0a7957649b028a5e891bed1ccb5bbbdff541e24833d64736f6c63430008120033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override deploy(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_logic, admin_, _data, overrides || {}) as Promise<
      TransparentUpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TransparentUpgradeableProxy__factory {
    return super.connect(runner) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TransparentUpgradeableProxy;
  }
}
