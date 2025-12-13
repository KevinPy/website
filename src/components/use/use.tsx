import Image from "next/image";
import Link from "next/link";
import styles from "./use.module.css";

export default function UseComponent() {
  return (
    <>
      <p>
        Inspired by{" "}
        <Link href="https://uses.tech" target="_blank">
          uses.tech
        </Link>
        , here is a list of some of the related things I use on a regular basis.
        No affiliate links.
      </p>
      <Image
        className={styles.image}
        src="/desk.webp"
        alt="Desktop"
        width={1000}
        height={562}
      />
      <section className={styles.category}>
        <h2 className={styles.title}>Software</h2>
        <ul className={styles.list}>
          <li>
            <strong>Browser</strong>{" "}
            <Link href="https://www.firefox.com/" target="_blank">
              Firefox
            </Link>
            . Before that, I used{" "}
            <Link href="https://librewolf.net/" target="_blank">
              LibreWolf
            </Link>
            , but it was slow, and often jerky.
          </li>
          <li>
            <strong>Code editor</strong>{" "}
            <Link href="https://code.visualstudio.com/" target="_blank">
              VS Code
            </Link>
            . I have a{" "}
            <Link
              href="https://github.com/KevinPy/dotfiles/blob/main/vs-code-extensions.md"
              target="_blank"
            >
              list of extensions I use here
            </Link>
            . Before, I used{" "}
            <Link href="https://www.jetbrains.com/idea/" target="_blank">
              InteliJ Idea
            </Link>
            . And before that,{" "}
            <Link href="https://www.sublimetext.com/" target="_blank">
              Sublime Text
            </Link>
            , which was great for its time. I continue tu use it for quick
            edits. And when I started programming, I used{" "}
            <Link
              href="https://www.peterborgapps.com/smultron/"
              target="_blank"
            >
              Smultron
            </Link>{" "}
            (Ouch!)
          </li>
          <li>
            <strong>Dot files</strong> I have a repository with all my{" "}
            <Link href="https://github.com/KevinPy/dotfiles" target="_blank">
              dotfiles
            </Link>
          </li>
          <li>
            <strong>Terminal</strong>{" "}
            <Link href="https://www.warp.dev/" target="_blank">
              Warp
            </Link>
          </li>
          <li>
            <strong>Shell</strong> I use{" "}
            <Link href="https://ohmyz.sh/" target="_blank">
              Oh My Zsh
            </Link>
            , and I share my{" "}
            <Link
              href="https://github.com/KevinPy/dotfiles/blob/main/.zshrc"
              target="_blank"
            >
              .zshrc
            </Link>{" "}
            with the powerlevel10k theme
          </li>
          <li>
            <strong>Git</strong> I share my{" "}
            <Link href="https://github.com/KevinPy/dotfiles/blob/main/.gitconfig">
              .gitconfig
            </Link>{" "}
            with my aliases, which allows me to work faster
          </li>
          <li>
            <strong>Design</strong> I use{" "}
            <Link href="https://www.sketch.com/" target="_blank">
              Sketch
            </Link>{" "}
            since +10 years. But also{" "}
            <Link href="https://www.pixelmator.com/pro/" target="_blank">
              Pixelmator Pro
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.category}>
        <h2 className={styles.title}>Hardware</h2>
        <ul className={styles.list}>
          <li>
            <strong>Desktop</strong> MacBook Pro 16&ldquo; M1 Max 64 Go / 1 To
          </li>
          <li>
            <strong>Display</strong>
            <Link
              href="https://www.lg.com/us/monitors/lg-40u990a-w-ultrafine-monitor"
              target="_blank"
            >
              LG 40U990A-W
            </Link>
          </li>
          <li>
            <strong>Headphone</strong> Bose QC35 II
          </li>
          <li>
            <strong>Earphone</strong> Apple AirPods Pro 2
          </li>
        </ul>
      </section>
      <section className={styles.category}>
        <h2 className={styles.title}>Desk</h2>
        <ul className={styles.list}>
          <li>
            <strong>Desk</strong>{" "}
            <Link
              href="https://www.flexispot.fr/pied-de-bureau-assis-debout-electrique-reglable-en-hauteur-e8"
              target="_blank"
            >
              Flexispot E8 Black frame
            </Link>
            , Mapple 120x60 cm
          </li>
          <li>
            <strong>Chair</strong> Herman Miller Aeron
          </li>
          <li>
            <strong>Chair wheels</strong>{" "}
            <Link href="https://amzn.eu/d/3v8CNNM" target="_blank">
              Roller Blade LifeLong
            </Link>
          </li>
          <li>
            <strong>Light (behind screen)</strong>{" "}
            <Link
              href="https://www.philips-hue.com/en-us/p/hue-white-and-color-ambiance-play-light-bar-single-pack/7820130U7"
              target="_blank"
            >
              Philips Hue Play x2
            </Link>
          </li>
          <li>
            <strong>Keyboard</strong>{" "}
            <Link
              href="https://www.logitech.com/en-us/shop/p/mx-keys-mini-for-mac"
              target="_blank"
            >
              Logitech MX Keys Mini
            </Link>
          </li>
          <li>
            <strong>Mouses</strong>{" "}
            <Link
              href="https://www.logitech.com/en-us/shop/p/mx-master-3s-mac-bluetooth-mouse"
              target="_blank"
            >
              Logitech MX Master 3S
            </Link>{" "}
            /{" "}
            <Link
              href="https://www.logitech.com/en-us/shop/p/mx-vertical-ergonomic-mouse"
              target="_blank"
            >
              Logitech MX Vertical
            </Link>{" "}
            when my wrist hurts /{" "}
            <Link
              href="https://www.logitech.com/en-us/shop/p/mx-anywhere-3s-for-mac"
              target="_blank"
            >
              Logitech MX Anywhere 3S
            </Link>{" "}
            for work outside
          </li>
        </ul>
      </section>
      <section className={styles.category}>
        <h2 className={styles.title}>Network</h2>
        <ul className={styles.list}>
          <li>
            <strong>Network</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-cloud-gateways/products/udm-se"
              target="_blank"
            >
              Unifi Dream Machine SE
            </Link>{" "}
            /{" "}
            <Link
              href="https://store.ui.com/us/en/category/accessories-storage/collections/unifi-accessory-tech-hdd/products/uacc-hdd-e-8tb?variant=uacc-hdd-e-8tb"
              target="_blank"
            >
              8 Tb HDD
            </Link>
          </li>
          <li>
            <strong>Main Switch</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-switching/products/usw-aggregation"
              target="_blank"
            >
              Unifi Aggregation
            </Link>
          </li>
          <li>
            <strong>Wi-Fi</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-wifi/products/e7"
              target="_blank"
            >
              Unifi E7
            </Link>
          </li>
          <li>
            <strong>Switch Homelab</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/switching-utility/products/usw-flex-xg"
              target="_blank"
            >
              Unifi Flex 10 GbE
            </Link>
          </li>
          <li>
            <strong>Switch Cameras</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/switching-utility/collections/pro-ultra/products/usw-ultra-60w"
              target="_blank"
            >
              Unifi Ultra 60W
            </Link>
          </li>
          <li>
            <strong>Wi-Fi garage</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-wifi/products/u7-lr"
              target="_blank"
            >
              Unifi U7 Long-Range
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.category}>
        <h2 className={styles.title}>Homelab</h2>
        <ul className={styles.list}>
          <li>
            <strong>NAS</strong> Synology DS923+ 10G /{" "}
            <Link href="https://amzn.eu/d/3jUqbPc" target="_blank">
              4x SSD Samsung 870 QVO 2 To
            </Link>{" "}
            /{" "}
            <Link href="https://amzn.eu/d/05bZQdR" target="_blank">
              2x M.2 Crucial 1 To
            </Link>{" "}
            /{" "}
            <Link href="https://amzn.eu/d/bloOEkD" target="_blank">
              2x 16 Go RAM DDR4 Crucial
            </Link>
          </li>
          <li>
            <strong>Home Assistant</strong> Home Assistant Yellow / 8 Gb RAM /
            32 Gb eMMC /{" "}
            <Link href="https://amzn.eu/d/65lQK2G" target="_blank">
              1x M.2 Samsung 980
            </Link>
          </li>
          <li>
            <strong>Cameras garage</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-cameras-nvrs/products/uvc-g5-pro"
              target="_blank"
            >
              2x Unifi G5 Pro
            </Link>{" "}
            /{" "}
            <Link
              href="https://store.ui.com/us/en/collections/camera-vision-enhancers/products/uacc-g5-enhancer"
              target="_blank"
            >
              Long-Range IR LED & Floodlight
            </Link>
          </li>
          <li>
            <strong>Cameras house</strong>{" "}
            <Link
              href="https://store.ui.com/us/en/category/all-cameras-nvrs/products/uvc-g3-ins"
              target="_blank"
            >
              3x Unifi G3 Instant
            </Link>
          </li>
          <li>
            <strong>Cameras garden</strong>{" "}
            <Link href="https://www.eufy.com/products/t81701w1" target="_blank">
              3x Eufy Solocam S340
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
