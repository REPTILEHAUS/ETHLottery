var manager_abi = [{"constant":true,"inputs":[],"name":"lotteries","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destruct","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lottery","type":"address"}],"name":"Register","type":"event"}];

var lottery_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner_fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"manager_address","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destruct","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"result_block","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_result_hash","type":"bytes32"}],"name":"manual_lottery","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"result","outputs":[{"name":"","type":"bytes1"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"jackpot","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_lottery","type":"address"}],"name":"accumulate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lottery","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_char","type":"bytes1"}],"name":"play","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"result_hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winners_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"open","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_manager","type":"address"},{"name":"_fee","type":"uint256"},{"name":"_jackpot","type":"uint256"},{"name":"_owner_fee","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_balance","type":"uint256"}],"name":"Balance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_result","type":"bytes1"},{"indexed":false,"name":"_winners_count","type":"uint256"}],"name":"Result","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_open","type":"bool"}],"name":"Open","type":"event"}];

var code = "0x60606040527f4554484c6f7474657279202d204c61737420312042797465204c6f7474657279600090600019169055341561003957600080fd5b6040516080806113bb833981016040528080519060200190919080519060200190919080519060200190919080519060200190919050505b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff02191690831515021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260048190555081600381905550806005819055507fc15f25c4eb6ac5b9dc23661b850cbdb3ee36aebed198ad870ab929bae77142de600260149054906101000a900460ff16604051808215151515815260200191505060405180910390a15b505050505b611239806101826000396000f300606060405236156100fa576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ff57806314ce4059146101305780631800ed8e146101595780631aa3a008146101ae5780632b68b9c6146101c35780633ccfd60b146101d8578063494d93cc146101ed5780634f01d77e14610216578063653721471461023d5780636b31ee01146102aa5780638da5cb5b146102d35780638f045bb614610328578063ba13a57214610361578063be3e33d514610376578063ca92a136146103b0578063ddca3f43146103e1578063fbe6a9b21461040a578063fcfff16f14610433575b600080fd5b341561010a57600080fd5b610112610460565b60405180826000191660001916815260200191505060405180910390f35b341561013b57600080fd5b610143610466565b6040518082815260200191505060405180910390f35b341561016457600080fd5b61016c61046c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b957600080fd5b6101c1610492565b005b34156101ce57600080fd5b6101d6610591565b005b34156101e357600080fd5b6101eb610648565b005b34156101f857600080fd5b6102006107c1565b6040518082815260200191505060405180910390f35b341561022157600080fd5b61023b6004808035600019169060200190919050506107c7565b005b341561024857600080fd5b610250610ad9565b60405180827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b34156102b557600080fd5b6102bd610b0b565b6040518082815260200191505060405180910390f35b34156102de57600080fd5b6102e6610b11565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561033357600080fd5b61035f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b37565b005b341561036c57600080fd5b610374610bcd565b005b6103ae60048080357effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610f1e565b005b34156103bb57600080fd5b6103c3611197565b60405180826000191660001916815260200191505060405180910390f35b34156103ec57600080fd5b6103f461119d565b6040518082815260200191505060405180910390f35b341561041557600080fd5b61041d6111a3565b6040518082815260200191505060405180910390f35b341561043e57600080fd5b6104466111a9565b604051808215151515815260200191505060405180910390f35b60005481565b60055481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16631aa3a0086040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561057857600080fd5b6102c65a03f1151561058957600080fd5b5050505b5b50565b600260149054906101000a900460ff161515156105ad57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561060957600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b5b565b6000600260149054906101000a900460ff1615151561066657600080fd5b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115156106b457600080fd5b600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156107bb5780600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b5b5b50565b60065481565b6000806000600260149054906101000a900460ff161515156107e857600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561084457600080fd5b8360088160001916905550600854601f60208110151561086057fe5b1a7f010000000000000000000000000000000000000000000000000000000000000002600960006101000a81548160ff02191690837f010000000000000000000000000000000000000000000000000000000000000090040217905550600a6000600960009054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000209250828054905060078190555060006007541115610a1d576007543073ffffffffffffffffffffffffffffffffffffffff163181151561097e57fe5b049150600090505b600754811015610a1c5781600b600085848154811015156109a357fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8080600101915050610986565b5b7f3a2a475c2890e3aac1066ee483918d733689b7395a43fb9d29f4ea2aec68bde6600960009054906101000a90047f01000000000000000000000000000000000000000000000000000000000000000260075460405180837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020018281526020019250505060405180910390a15b5b5b50505050565b600960009054906101000a90047f01000000000000000000000000000000000000000000000000000000000000000281565b60035481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260149054906101000a900460ff16151515610b5357600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610baf57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b5b5b50565b6000806000600260149054906101000a900460ff16151515610bee57600080fd5b6006544310158015610c065750610100600654014311155b8015610c1f575060085460001916600654406000191614155b1515610c2a57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c8657600080fd5b6006544060088160001916905550600854601f602081101515610ca557fe5b1a7f010000000000000000000000000000000000000000000000000000000000000002600960006101000a81548160ff02191690837f010000000000000000000000000000000000000000000000000000000000000090040217905550600a6000600960009054906101000a90047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000209250828054905060078190555060006007541115610e62576007543073ffffffffffffffffffffffffffffffffffffffff1631811515610dc357fe5b049150600090505b600754811015610e615781600b60008584815481101515610de857fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8080600101915050610dcb565b5b7f3a2a475c2890e3aac1066ee483918d733689b7395a43fb9d29f4ea2aec68bde6600960009054906101000a90047f01000000000000000000000000000000000000000000000000000000000000000260075460405180837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020018281526020019250505060405180910390a15b5b5b5b505050565b6000600260149054906101000a900460ff161515610f3b57600080fd5b6004543410151515610f4c57600080fd5b600a6000837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000208054806001018281610fb591906111bc565b916000526020600020900160005b33909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506003543073ffffffffffffffffffffffffffffffffffffffff1631101515611142576000600260146101000a81548160ff021916908315150217905550600a430160068190555060646005543073ffffffffffffffffffffffffffffffffffffffff16310281151561107357fe5b049050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156110f7576001600260146101000a81548160ff02191690831515021790555060006006819055505b7fc15f25c4eb6ac5b9dc23661b850cbdb3ee36aebed198ad870ab929bae77142de600260149054906101000a900460ff16604051808215151515815260200191505060405180910390a15b7fe8d947d7ebdd7b8b8fa2ad2022c7591418ac32d8c29c5f8a8fc9de52ffa540923073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a15b5b5b5050565b60085481565b60045481565b60075481565b600260149054906101000a900460ff1681565b8154818355818115116111e3578183600052602060002091820191016111e291906111e8565b5b505050565b61120a91905b808211156112065760008160009055506001016111ee565b5090565b905600a165627a7a72305820201fc7cb3eccf7d509769a84a7b9deb35d7562c54c73e9f3fcab445597895c930029";


var gas = 3000000;

var wait_blocks = 10;

var owner = "0xe581c6f0fae3bc426acfc660b36a7caf90f27987";

var manager_address = "0x79a48215e2fafbaa36baba048864c95a6ab9eb99";

var manager_contract = web3.eth.contract(manager_abi).at(manager_address);

var lottery_map = {};

var add_lottery = function (address) {
    if (lottery_map[address]) {
        return;
    }
    console.log('add ' + address);
    var lottery = web3.eth.contract(lottery_abi).at(address);
    lottery_map[address] = lottery;

    lottery.Open(function(error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('Open ' + result.address);
            if (result.args._open == false) {
                console.log('Closed ' + result.address);
                var wait_block = result.blockNumber + wait_blocks;
                console.log('waiting for 20 blocks from ' + eth.blockNumber + ' until ' + wait_block);
                var interval = setInterval(function () {
                    console.log('waiting ' + eth.blockNumber + ' until ' + wait_block);
                    if (eth.blockNumber > wait_block) {
                        console.log('finish waiting ' + eth.blockNumber);
                        clearInterval(interval);
                        call_lottery(result.address);
                    }
                }, 30000);
            }
        }
    });
    lottery.Result(function(error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('Result ' + result.address);
            var lottery = lottery_map[result.address];
            console.log('winners count ' + result.args._winners_count);
            var accumulate = result.args._winners_count == 0 ? true : false;
            console.log('accumulate value ' + accumulate);
            reproduce_lottery(lottery, accumulate);
        }
    });

    lottery.open(function(error, result) {
        if (!error && !result) {
            lottery.result_hash(function(error, result) {
                if (!error && result == '0x0000000000000000000000000000000000000000000000000000000000000000') {
                    console.log('need lottery ' + lottery.address);
                    call_lottery(lottery.address);
                }
            });
        }
    });
};

var call_lottery = function (address) {
    var lottery = lottery_map[address];
    lottery.lottery({ from: owner, gas: gas }, function (error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('lottery tx ' + result.transactionHash);
            if (result.address) {
                console.log('lottery ' + result.address);
            }
        }
    });
};

var reproduce_lottery = function (lottery, accumulate) {
    var accumulated = accumulate ? eth.getBalance(lottery.address) : 0;
    var accumulate_address = accumulate ? lottery.address : null;
    deploy_lottery(
        lottery.fee().toString(10),
        lottery.jackpot().plus(accumulated).toString(10),
        lottery.owner_fee().toString(10),
        accumulate_address
    );
    deploy_lottery(
        lottery.fee().toString(10),
        lottery.jackpot().toString(10),
        lottery.owner_fee().toString(10)
    );
};


// deploy_lottery(1000000000000000, 1000000000000000, 2);
var deploy_lottery = function (fee, jackpot, owner_fee, accumulate_address) {
    web3.eth.contract(lottery_abi).new(manager_address, fee, jackpot, owner_fee,
        { from: owner, data: code, gas: gas },
        function (error, result) {
            if (error) {
                console.log(error);
            }
            if (result) {
                console.log('created tx ' + result.transactionHash);
                if (result.address) {
                    console.log('created ' + result.address);
                    add_lottery(result.address);
                    if (accumulate_address) {
                        accumulate_lottery(result.address, accumulate_address);
                    }
                    else {
                        register_lottery(result.address);
                    }
                }
            }
        }
    );
};

var register_lottery = function (address) {
    var lottery = lottery_map[address];
    lottery.register({ from: owner, gas: gas }, function (error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('registered tx ' + result.transactionHash);
            if (result.address) {
                console.log('registered ' + result.address);
            }
        }
    });
};

var accumulate_lottery = function (address, accumulate_address) {
    var lottery = lottery_map[accumulate_address];
    lottery.accumulate(address, { from: owner, gas: gas }, function (error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log('accumulate tx ' + result.transactionHash);
            if (result.address) {
                console.log('accumulated' + result.address);
                register_lottery(result.address);
            }
        }
    });
};

var register_event = manager_contract.Register(function (error, result) {
    if (error) {
        console.log(error);
    }
    if (result) {
        console.log('Register ' + result.address);
        add_lottery(result.args.lottery);
    }
});

var lottery_address_list = manager_contract.lotteries();

lottery_address_list.forEach(function(lottery_address) {
    add_lottery(lottery_address);
});