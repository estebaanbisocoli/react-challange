import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Footer.scss";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Youtube from "../../assets/Youtube.png";
import States from "../../assets/States.png";
import Arrow from "../../assets/arrow-down.png";

const FooterList = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="footer-list">
      <h3 className="text-normal lh24 bold is-primary">{title}</h3>
      {items.map((item, index) => (
        <span key={index} className="text-xs lh16 regular">
          {item}
        </span>
      ))}
    </div>
  );
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-main-col">
          <Logo fill="#091625" height={"48px"}></Logo>
          <p className="text-xs lh24 regular is-light-text">
            {t("FOOTER_INFO")}
          </p>
          <div className="footer-phone">
            <PhoneIcon className="footer-phone-icon" />
            <span className="text-xs lh16 semi-bold">+1-202-555-0129</span>
          </div>
          <div className="footer-social">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
        <FooterList
          title={t("FOOTER_COMPANY_TITLE")}
          items={[
            t("FOOTER_COMPANY_ABOUT_US"),
            t("FOOTER_COMPANY_FAQ"),
            t("FOOTER_COMPANY_PARTNERSHIPS"),
            t("FOOTER_COMPANY_SUSTAINABILITY"),
            t("FOOTER_COMPANY_BLOG"),
          ]}
        />
        <FooterList
          title={t("FOOTER_HELP_TITLE")}
          items={[
            t("FOOTER_HELP_TICKET"),
            t("FOOTER_HELP_TRACK"),
            t("FOOTER_HELP_CENTER"),
          ]}
        />
        <FooterList
          title={t("FOOTER_INFORMATION_TITLE")}
          items={[
            t("FOOTER_INFORMATION_CONTACT"),
            t("FOOTER_INFORMATION_LIVE_CHAT"),
            t("FOOTER_INFORMATION_PRIVACY"),
            t("FOOTER_INFORMATION_TERMS"),
          ]}
        />
      </div>
      <div className="footer-bottom">
        <span className="text-xxs lh16 regular">{t("FOOTER_COPYWRITE")}</span>
        <div className="footer-intl">
          <div>
            <span className="text-xxs lh16 regular">{t("FOOTER_REGION")}</span>
            <span className="footer-region-picker">
              <img src={States}></img>
              <span className="text-xxs lh16 bold is-primary">
                {t("FOOTER_REGION_US")}
              </span>
              <img src={Arrow} />
            </span>
          </div>
          <div>
            <span className="text-xxs lh16 regular">{t("FOOTER_REGION")}</span>
            <span className="footer-region-picker">
          
              <span className="text-xxs lh16 bold is-primary">
                {t("FOOTER_LANGUAGE_EN")}
              </span>
              <img src={Arrow} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
