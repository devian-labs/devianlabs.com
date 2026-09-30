---
title: "Mohur"
description: "A coin collecting app for people who see history in coins. Keep your collection in one place, learn the stories behind your coins, and meet other collectors. Now in beta on Android."
date: "2026-09-30"
author: "Devian Labs"
---

## The problem

Most coin collections start by accident. A tin from a grandparent. A coin that turned up in your change, or cost ten rupees at a village fair. Somewhere along the way it stops being money and starts being a story.

Then the hobby gets hard. Half the coins are in a biscuit tin and the rest in a drawer, and nobody remembers what's there. You're holding something a king had minted, and you know nothing about it. When you want to know if a coin is real, everyone you could ask is trying to sell you something. And when you show your family a new find, they smile politely.

Collectors had spreadsheets, dealer websites and scattered forums. They didn't have one place built for them.

## What we built

Mohur is a coin collecting app: a home for your collection, a place to learn, and a community of people who love the hobby as much as you do.

The core features:
- **Album**: every coin you own, photographed, graded and noted with where it came from and why it matters to you
- **Catalogue**: the coin types that were actually issued, from punch-marked karshapanas to the first Republic rupee, so you can see what you have and what you're missing
- **Learn**: short lessons on who struck these coins, when and why, written as history rather than reference tables
- **Community**: share a coin and hear from fellow collectors. An honest second opinion, never a sales pitch or a price tag

## Key decisions

**Story first, not features first.** Every part of the app starts from the feeling a collector already knows and only then says what Mohur does about it. That shaped the product, and the website too.

**No price tags in the community.** The moment coins get valued in public, the conversation becomes about selling. Mohur keeps it about the coins and their history.

**Built with collectors, not just for them.** Mohur is in open beta on Android so the people who care about the hobby shape it before the wider launch.

**Free, with a fair model.** Ads support the app, and a one-time purchase removes them. No subscription.

## Stack

- **App**: Flutter
- **Backend**: Firebase
- **Images**: served through Cloudflare Workers
- **Website**: Next.js

## Status

Open beta on Android. Join the testers group, opt in on Google Play, and install Mohur like any other app. iPhone comes later.

[Visit Mohur](https://mohur.devianlabs.com) · [Join the Android beta](https://groups.google.com/g/mohur-beta-testers)
