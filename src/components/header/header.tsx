"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import styles from "./header.module.css";
import { Network } from "@/models/network";
import Link from "next/link";

type Props = {
  networks?: Network[];
  hasPresentation?: boolean;
};

type LogoProps = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

export default function HeaderComponent(props: Props) {
  const { networks, hasPresentation } = props;

  const items = networks?.map((item, i) => <NetworkItem key={i} {...item} />);

  const [showMe, setShowMe] = useState(false);

  return (
    <header>
      <ShowMe showMe={showMe} />
      <Logo
        srcLight="/logo_dark.svg"
        srcDark="/logo_light.svg"
        alt="logo"
        width={50}
        height={50}
      />
      {hasPresentation && (
        <>
          <p>
            Bonjour, my name is{" "}
            <i
              onMouseEnter={() => setShowMe(true)}
              onMouseLeave={() => setShowMe(false)}
              style={{ cursor: "pointer" }}
            >
              Kevin Py
            </i>
            ,<br />a french freelance Tech Lead, Expert Front-End Developer, and
            Software Architect.
          </p>
          <ul className={styles.networks}>{items}</ul>
        </>
      )}
    </header>
  );
}

function Logo(props: LogoProps) {
  const { srcLight, srcDark, alt, ...rest } = props;

  return (
    <Link href="/" className={styles.logo}>
      <Image {...rest} alt={alt} src={srcLight} className={styles.logoLight} />
      <Image {...rest} alt={alt} src={srcDark} className={styles.logoDark} />
    </Link>
  );
}

function NetworkItem(props: Network) {
  const { name, url } = props;
  const target = url.startsWith("https://") ? "_blank" : "_self";

  return (
    <li>
      <Link href={url} target={target}>
        <span>{name}</span>
      </Link>
    </li>
  );
}

function ShowMe({ showMe }: { showMe: boolean }) {
  return (
    <>
      {showMe && (
        <div className={styles.showMe}>
          <Image src="/me.png" alt="Kevin Py" width={100} height={100} />
        </div>
      )}
    </>
  );
}
