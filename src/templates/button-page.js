import React from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLongArrowAltRight,
  faShare,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faLongArrowAltRight,
  faShare,
  faHeart
])

const Spacer = styled.span`
  margin-right: 6rem;
`

export default () => (
  <Layout displayTitle={"Buttons"}>
    <div className="section content">
      <h1>Examples</h1>
      <h3>Buttons</h3>
      <p>To ensure visual clarity, allow for ample space around the brandmark. This exclusion zone should be free from any other elements. Use the “Pr” in Project as a scalable measuring device.</p>

      <div className="columns is-multiline" style={{marginTop: 20}}>
        <div className="column is-6">
          <Button>Primary</Button>
        </div>
        <div className="column is-6 has-text-right">
          <Button>
            Primary
            <Spacer />
            <FontAwesomeIcon icon={'long-arrow-alt-right'} />
          </Button>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-4">
          <Button give>Give</Button>
        </div>
        <div className="column is-4 has-text-centered">
          <Button give>
            <FontAwesomeIcon icon={'heart'} /> Give
          </Button>
        </div>
        <div className="column is-4 has-text-right">
          <Button give>
            Give
            <Spacer />
            <FontAwesomeIcon icon={'long-arrow-alt-right'} />
          </Button>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-4">
          <Button secondary>Secondary</Button>
        </div>
        <div className="column is-4 has-text-centered">
          <Button secondary>
            <FontAwesomeIcon icon={'share'} /> Secondary
          </Button>
        </div>
        <div className="column is-4 has-text-right">
          <Button secondary>
            Secondary
            <Spacer />
            <FontAwesomeIcon icon={'long-arrow-alt-right'} />
          </Button>
        </div>
      </div>
      <div style={{marginTop: 40}}>
        <h3>Card Buttons</h3>
        <p>To ensure visual clarity, allow for ample space around the brandmark. This exclusion zone should be free from any other elements. Use the “Pr” in Project as a scalable measuring device.</p>
      </div>

      <div className="columns is-multiline" style={{marginTop: 20}}>
        <div className="column is-6">
          <Button card>
            Learn More
            <Spacer />
            <FontAwesomeIcon icon={'long-arrow-alt-right'} />
          </Button>
        </div>
        <div className="column is-6">
          <Button giveCard>
            Give
            <Spacer />
            <FontAwesomeIcon icon={'long-arrow-alt-right'} />
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);
