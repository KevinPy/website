import Image, { ImageProps } from "next/image";
import styles from "./header.module.css";
import { Network } from "@/models/network";
import Link from "next/link";

type Props = {
  networks: Network[];
};

type LogoProps = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

export default function HeaderComponent(props: Props) {
  const { networks } = props;

  const items = networks.map((item, i) => <NetworkItem key={i} {...item} />);

  return (
    <header className={styles.wrapper}>
      <Logo
        srcLight="/logo_dark.svg"
        srcDark="/logo_light.svg"
        alt="logo"
        width={50}
        height={50}
      />
      <p className={styles.presentation}>
        Bonjour, my name is <i>Kevin Py</i>, a french Freelancer Tech Lead,
        Expert Front-End Developer, and Software Architect. I created my
        company, called Pyxel.
      </p>
      <ul className={styles.networks}>{items}</ul>
    </header>
  );
}

function Logo(props: LogoProps) {
  const { srcLight, srcDark, alt, ...rest } = props;

  return (
    <>
      <Image {...rest} alt={alt} src={srcLight} className={styles.logoLight} />
      <Image {...rest} alt={alt} src={srcDark} className={styles.logoDark} />
    </>
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
