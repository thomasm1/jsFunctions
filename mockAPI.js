import MockAdapter from 'axios-mock-adapter';
import { random, times, sample } from 'lodash';
export default function initializeMockAPI(client) {

  const mock = new MockAdapter(client);

  mock.onGet().reply(function(config) {
    const slugs = config.url.split('/');

    // Well Pad Detail
    if (slugs.length === 2 && slugs[0] === 'submissions') {
      return [200, SubmissionActive(slugs[1])]
    }

    // CIF Detail
    if (slugs.length === 2 && slugs[0] === 'cifs') {
      return [200, CIFActive(slugs[1])]
    }

    // Certification Detail
    if (slugs.length === 2 && slugs[0] === 'certifications') {
      return [200, Certification(slugs[1])]
    }

    // List Well Pads
    if (slugs.length === 1 && slugs[0] === 'submissions') {
      return [200, {
        data: times(10, () => sample([SubmissionActive(), SubmissionActive(), SubmissionActive(),  SubmissionActive(), SubmissionPending(), SubmissionRejected()]))
      }]
    }

    // List CIFs
    if (slugs.length === 1 && slugs[0] === 'cifs') {
      return [200, {
        data: times(15, () => sample([CIFActive(), CIFActive(), CIFActive(), CIFPending(), CIFRetired()]))
      }]
    }

    // List Certifications
    if (slugs.length === 1 && slugs[0] === 'certifications') {
      return [200, { data: times(6, () => Certification()) }]
    }

    // List Transactions
    if (slugs.length === 1 && slugs[0] === 'transactions') {
      return [200, { }]
    }

    // User Detail
    if (slugs[0] === 'me') {
      return [200, {data: {name: 'yo'}}]
    }


  });

  mock.onPost('auth/sign_in').reply(function(config) {
    return [200, {data: {name: 'yo'}}, {'access-token': 'abc'}]
  });

  return mock;
};

const CIFActive = (id = random(300000000, 999999999)) => {
  return {
    id,
    status: 'active',
    producer: 'Gas Co.',
    ownership: 'Gas Co.',
    standardBody: 'American Carbon Registry',
    creationDate: '4/11/16',
    trancheSize: random(10000, 15000)
  }
}

const SubmissionRejected = () => {
  const randomDay = random(10,25);
  return {
    status: 'rejected',
    cifId: '-',
    trancheSize: '-',
    productionDate: `3/${randomDay}/16`,
    standard: 'No Certificate',
    fileName: `3.${randomDay}.2016.txt`
  }
}

const CIFPending = () => {
  const randomDay = random(10,25);
  return {
    status: 'pending',
    id: '-',
    trancheSize: '-',
    productionDate: `3/${randomDay}/16`,
    fileLocation: '/GasCo/ProductionData',
    fileName: `3.${randomDay}.2016.txt`
  }
}

const CIFRetired = (id = random(300000000, 999999999)) => {
  const randomDay = random(10,25);
  return {
    id,
    status: 'retired',
    producer: 'Gas Co.',
    ownership: 'Gas Co.',
    standardBody: 'American Carbon Registry',
    creationDate: `4/${randomDay}/16`,
    trancheSize: random(10000, 15000)
  }
}

const SubmissionActive = (id = random(1000000, 2000000)) => {
  const randomDay = random(10,25);
  return {
    status: 'CIF Issued',
    cifId: id,
    trancheSize: random(10000, 15000),
    productionDate: `3/${randomDay}/16`,
    standard: 'American Carbon Registry',
    fileName: `3.${randomDay}.2016.txt`
  }
}

const SubmissionPending = () => {
  const randomDay = random(10,25);
  return {
    status: 'pending',
    cifId: '-',
    trancheSize: '-',
    productionDate: `3/${randomDay}/16`,
    standard: '-',
    fileName: `3.${randomDay}.2016.txt`
  }
}

const Certification = (id='Big Cat FED 2126-4899') => {
  return {
    id,
    inspector: 'John Smith',
    DOI: '12/21/2015',
    DOE: '12/20/2016',
    nextStep: 'Follow Up Inspection',
    certification: random(123000,500000)
  }
};
