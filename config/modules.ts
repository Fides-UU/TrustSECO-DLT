import { TokenModule, DPoSModule, KeysModule, SequenceModule } from 'lisk-sdk';
import config = require('./config.json');

import { NaiveModule } from '../modules/naive/naive_module';
import { CodaModule } from '../modules/coda/coda-module';
import { TrustFactsModule } from '../modules/trustfacts/trustfacts_module';
import { PackageDataModule} from '../modules/packagedata/packagedata-module';


export const modules = [

    // Default Modules
    new TokenModule(config.genesisConfig),
    new DPoSModule(config.genesisConfig),
    new KeysModule(config.genesisConfig),
    new SequenceModule(config.genesisConfig),

    // ADD ALL MODULES HERE
    // (don't forget to import them)

    new NaiveModule(config.genesisConfig),
    new CodaModule(config.genesisConfig),
    new TrustFactsModule(config.genesisConfig),
    new PackageDataModule(config.genesisConfig),
]