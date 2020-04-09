import React from "react";
import { FormattedMessage } from "react-intl";

import { ReactComponent as Logo } from "../../../../assets/img/logo-ico.svg";

const SubAuthHeader = () => {
  return (
    <div className="col-12 col-md-6">
      <Logo className="float-left" />
      <h3 className="brand text-center">
        <FormattedMessage
          id="app.sub_auth_header.digital_native"
          defaultMessage="Digital Native"
        />
      </h3>

      <p className="slogan text-center">
        <FormattedMessage
          id="app.sub_auth_header.subtitle"
          defaultMessage="Educational kits for STEAM training"
        />
      </p>
    </div>
  );
};

export default SubAuthHeader;
