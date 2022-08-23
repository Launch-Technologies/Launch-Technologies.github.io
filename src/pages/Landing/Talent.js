import React from 'react';
import { Card, Col } from 'antd';
import './Landing.scoped.css';

const Talent = ({ name, job, desc, img_path }) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
      <Card
        hoverable
        className="card_talent"
        cover={
          <img
            className="img_card_talent"
            alt={name}
            // src="https://s3-alpha-sig.figma.com/img/dbde/eeac/16cc041a6670ebd271437f44536034a7?Expires=1661731200&Signature=fN7lA1nDxxPs9mJE25b0~D72C34V1EwIGYP80zeUuk56sPgMRB52dNTfbiwURghpIVdYoIlV0uc8XSk4b1C7johc8Y1y2uX1COQ7wEb0wTOqCIKvPPFFGqZg7CnDW61JB6U99kjvgy-9IrRFbmwre4NVsCXCqsgnLzO3DKjeRNtpbbEuPIikmyKkEyanpinKf14IRjUdKpdiw0Jij0XAfyT3JEgTUvQ5yKqDXnx4fFm09CYZJvqygx4xMFTXpQWsYwgNOBPMdG2pjksQOUA~i94pUeVLudY5v8za7EUJeSfK64knmdx6uvvfXaEr6vsb7gNisUyFAmKl7alYmFgEkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            src={img_path}
          />
        }
      >
        <div>
          <p className="talent_name">{name}</p>
          <p className="talent_job">{job}</p>
          <p className="talent_desc">{desc}</p>
        </div>
      </Card>
    </Col>
  );
};

export default Talent;
