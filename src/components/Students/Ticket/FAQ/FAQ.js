import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import { Button, Row, Col } from 'reactstrap'

const FAQ = () => {
  const [index, setIndex] = useState(1)
  return (
    <div>
      <Button
        className="block text-left mb-3"
        color="danger"
        size="sm"
        onClick={() => setIndex(1)}
        block
      >
        How I can complete my challenges?
      </Button>
      <Collapse isOpened={index === 1}>
        <h6 className="text-left faq__content pt-2 mb-4">
          Savings her pleased are several started females met. Short her not
          among being any. Thing of judge fruit charm views do. Miles mr an
          forty along as he. She education get middleton day agreement performed
          preserved unwilling. Do however as pleased offence outward beloved by
          present. By outward neither he so covered amiable greater. Juvenile
          proposal betrayed he an informed weddings followed. Precaution day see
          imprudence sympathize principles. At full leaf give quit to in they
          up. Improve him believe opinion offered met and end cheered forbade.
          Friendly as stronger speedily by recurred. Son interest wandered sir
          addition end say. Manners beloved affixed picture men ask. Explain few
          led parties attacks picture company. On sure fine kept walk am in it.
          Resolved to in believed desirous unpacked weddings together. Nor off
          for enjoyed cousins herself. Little our played lively she adieus far
          sussex. Do theirs others merely at temper it nearer.
        </h6>
      </Collapse>
      <Button
        className="block text-left mb-3"
        color="danger"
        size="sm"
        onClick={() => setIndex(2)}
        block
      >
        What the challenges are?
      </Button>
      <Collapse isOpened={index === 2}>
        <h6 className="text-left faq__content pt-2 mb-4">
          Savings her pleased are several started females met. Short her not
          among being any. Thing of judge fruit charm views do. Miles mr an
          forty along as he. She education get middleton day agreement performed
          preserved unwilling. Do however as pleased offence outward beloved by
          present. By outward neither he so covered amiable greater. Juvenile
          proposal betrayed he an informed weddings followed. Precaution day see
          imprudence sympathize principles. At full leaf give quit to in they
          up. Improve him believe opinion offered met and end cheered forbade.
          Friendly as stronger speedily by recurred. Son interest wandered sir
          addition end say. Manners beloved affixed picture men ask. Explain few
          led parties attacks picture company. On sure fine kept walk am in it.
          Resolved to in believed desirous unpacked weddings together. Nor off
          for enjoyed cousins herself. Little our played lively she adieus far
          sussex. Do theirs others merely at temper it nearer.
        </h6>
      </Collapse>
      <Button
        className="block text-left mb-3"
        color="danger"
        size="sm"
        onClick={() => setIndex(3)}
        block
      >
        How do I start?
      </Button>
      <Collapse isOpened={index === 3}>
        <h6 className="text-left faq__content pt-2 mb-4">
          Savings her pleased are several started females met. Short her not
          among being any. Thing of judge fruit charm views do. Miles mr an
          forty along as he. She education get middleton day agreement performed
          preserved unwilling. Do however as pleased offence outward beloved by
          present. By outward neither he so covered amiable greater. Juvenile
          proposal betrayed he an informed weddings followed. Precaution day see
          imprudence sympathize principles. At full leaf give quit to in they
          up. Improve him believe opinion offered met and end cheered forbade.
          Friendly as stronger speedily by recurred. Son interest wandered sir
          addition end say. Manners beloved affixed picture men ask. Explain few
          led parties attacks picture company. On sure fine kept walk am in it.
          Resolved to in believed desirous unpacked weddings together. Nor off
          for enjoyed cousins herself. Little our played lively she adieus far
          sussex. Do theirs others merely at temper it nearer.
        </h6>
      </Collapse>
      <Button
        className="block text-left mb-3"
        color="danger"
        size="sm"
        onClick={() => setIndex(4)}
        block
      >
        How I earn new points?
      </Button>
      <Collapse isOpened={index === 4}>
        <h6 className="text-left faq__content pt-2 mb-4">
          Savings her pleased are several started females met. Short her not
          among being any. Thing of judge fruit charm views do. Miles mr an
          forty along as he. She education get middleton day agreement performed
          preserved unwilling. Do however as pleased offence outward beloved by
          present. By outward neither he so covered amiable greater. Juvenile
          proposal betrayed he an informed weddings followed. Precaution day see
          imprudence sympathize principles. At full leaf give quit to in they
          up. Improve him believe opinion offered met and end cheered forbade.
          Friendly as stronger speedily by recurred. Son interest wandered sir
          addition end say. Manners beloved affixed picture men ask. Explain few
          led parties attacks picture company. On sure fine kept walk am in it.
          Resolved to in believed desirous unpacked weddings together. Nor off
          for enjoyed cousins herself. Little our played lively she adieus far
          sussex. Do theirs others merely at temper it nearer.
        </h6>
      </Collapse>
      <Button
        className="block text-left mb-3"
        color="danger"
        size="sm"
        onClick={() => setIndex(5)}
        block
      >
        How I can complete my challenges?
      </Button>
      <Collapse isOpened={index === 5}>
        <h6 className="text-left faq__content pt-2 mb-4">
          Savings her pleased are several started females met. Short her not
          among being any. Thing of judge fruit charm views do. Miles mr an
          forty along as he. She education get middleton day agreement performed
          preserved unwilling. Do however as pleased offence outward beloved by
          present. By outward neither he so covered amiable greater. Juvenile
          proposal betrayed he an informed weddings followed. Precaution day see
          imprudence sympathize principles. At full leaf give quit to in they
          up. Improve him believe opinion offered met and end cheered forbade.
          Friendly as stronger speedily by recurred. Son interest wandered sir
          addition end say. Manners beloved affixed picture men ask. Explain few
          led parties attacks picture company. On sure fine kept walk am in it.
          Resolved to in believed desirous unpacked weddings together. Nor off
          for enjoyed cousins herself. Little our played lively she adieus far
          sussex. Do theirs others merely at temper it nearer.
        </h6>
      </Collapse>
    </div>
  )
}

export default FAQ
