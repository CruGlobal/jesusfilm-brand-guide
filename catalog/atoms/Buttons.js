import React from 'react';
import {Page, ReactSpecimen, ColorSpecimen} from 'catalog';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Spacer = styled.span`
  margin-right: 6rem;
`

export default () => (
  <Page >
    <div>
      <h1>Examples</h1>
      <h3>Buttons</h3>
      <p>To ensure visual clarity, allow for ample space around the brandmark. This exclusion zone should be free from any other elements. Use the “Pr” in Project as a scalable measuring device.</p>
    </div>
    <ReactSpecimen span={3}>
      <Button>Primary</Button>
      <Button>
        Primary
        <Spacer />
        <FontAwesomeIcon icon={'long-arrow-alt-right'} />
      </Button>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <Button give>Give</Button>
      <Button give>
        Give
        <Spacer />
        <FontAwesomeIcon icon={'long-arrow-alt-right'} />
      </Button>
      <Button give>
        <FontAwesomeIcon icon={'heart'} /> Give
      </Button>
    </ReactSpecimen>

    <ReactSpecimen span={6}>
      <Button secondary>Secondary</Button>
      <Button secondary>
        Secondary
        <Spacer />
        <FontAwesomeIcon icon={'long-arrow-alt-right'} />
      </Button>
      <Button secondary>
        <FontAwesomeIcon icon={'share'} /> Secondary
      </Button>
    </ReactSpecimen>

    <div>
      <h3>Card Buttons</h3>
      <p>To ensure visual clarity, allow for ample space around the brandmark. This exclusion zone should be free from any other elements. Use the “Pr” in Project as a scalable measuring device.</p>
    </div>

    <ReactSpecimen span={3}>
      <Button card>
        Learn More
        <Spacer />
        <FontAwesomeIcon icon={'long-arrow-alt-right'} />
      </Button>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <Button giveCard>
        Give
        <Spacer />
        <FontAwesomeIcon icon={'long-arrow-alt-right'} />
      </Button>
    </ReactSpecimen>

  </Page>
);
