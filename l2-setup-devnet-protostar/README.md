# Important Contract Address
STARKNET_ACCOUNT = 0x33507ff2edf12c12c73d0b6d1d90de9fac12a355de1097ab305249612451919
CAIRO_CONTRACT_ADDR = 0x019010a55d449a4fca3126dd23819d31c8693cfb78b64968b9c52d81ba83c7c7
MockStarknetMessaging = 0xefbF81372aBC3723463746a89CEb42080563684C
L1L2 = 0x176aA34a1a36F0A43736aBDcd3D9f011a107cdF8
L1_EOA = 0xFAdDb8777bf0445aBb85DA2d1889836BaCC5C9A3

# Declare and Deploy Smart Contract
```
starknet-devnet --seed 1234

protostar build
protostar -p devnet declare ./build/l1l2.json --account-address 0x33507ff2edf12c12c73d0b6d1d90de9fac12a355de1097ab305249612451919  --private-key-path ./.pkey --max-fee auto

protostar -p devnet deploy 0x6c9768b03ed4256d6c6e4d2374cda8c51dbf775225a285d9db16b48f1170c40 --salt 1234 --account-address 0x33507ff2edf12c12c73d0b6d1d90de9fac12a355de1097ab305249612451919 --private-key-path ./.pkey --max-fee auto
```

# Invoke Smart Contract
```
protostar -p devnet invoke --contract-address 0x019010a55d449a4fca3126dd23819d31c8693cfb78b64968b9c52d81ba83c7c7 --function "increase_balance" --account-address 0x33507ff2edf12c12c73d0b6d1d90de9fac12a355de1097ab305249612451919 --inputs 0xFAdDb8777bf0445aBb85DA2d1889836BaCC5C9A3 100 --max-fee auto --private-key-path ./.pkey

protostar -p devnet call --contract-address 0x019010a55d449a4fca3126dd23819d31c8693cfb78b64968b9c52d81ba83c7c7 --function "get_balance" --inputs 0xFAdDb8777bf0445aBb85DA2d1889836BaCC5C9A3
```

# Send L2 message to L1

```
protostar -p devnet invoke --contract-address 0x019010a55d449a4fca3126dd23819d31c8693cfb78b64968b9c52d81ba83c7c7 --function "withdraw" --account-address 0x33507ff2edf12c12c73d0b6d1d90de9fac12a355de1097ab305249612451919 --inputs 0xFAdDb8777bf0445aBb85DA2d1889836BaCC5C9A3 10 0x176aA34a1a36F0A43736aBDcd3D9f011a107cdF8 --max-fee auto --private-key-path ./.pkey
```