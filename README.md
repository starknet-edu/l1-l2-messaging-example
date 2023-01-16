# L1 <-> L2 integration Message Example
This is a demo for showcasing how to setup l1<->l2 integration in your local dev env. The whole repo consists of two folders.

## l1-hardhat
This is the layer1 code, which should be deployed on your local ganache instance. The project is scaffolded using hardhat.
```
ganache -s 1234
```

## l2-protostar
This is the starknet code, which should be deployed on starknet-devnet. The project is scaffolded using protostar.
```
source ~/cairo_venv/bin/activate //Assume your have your cairo_venv setup already
export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES //This is required for MAC M1 machine at least, otherwise the l1 l2 messaging wont work
starknet-devnet --seed 1234
```

## Postman integration
For it to work, we also need to install postman and search of starknet-edu collection. For details please refer to this repo.

## Remix Code for verification purpose.
Please load your code for the gist [here](https://gist.github.com/cryptoleek-eth/76ab418d42730e6c516ed2f38cad9959)

## For video tutorial, please refer to this youtbe video

