---
title: "Campfyr"
description: "The offline companion app for group travel. SOS alerts, expense splitting, shared itineraries, and photo sharing — all without a signal."
date: "2026-04-01"
author: "Devian Labs"
---

## The problem

Group travel breaks down when there's no signal. And the places worth travelling to — mountains, remote coastlines, national parks, international trips with expensive roaming — are often exactly the places where your phone has no bars.

When things go wrong off-grid, there's no easy way to alert your group. When someone goes missing or gets injured on a trail, the people 500 metres away don't know. When expenses pile up across five people over ten days, someone's keeping a running tally in Notes. When the day's plan changes, there's no way to update everyone who's already scattered.

These aren't edge cases. They're the normal friction of any group trip that takes you away from reliable connectivity.

## What we built

Campfyr is an offline-first companion app for group trips. Everything it does works without internet — over Bluetooth and local Wi-Fi mesh between group members' phones.

**SOS and safety alerts.** If someone's in trouble, they trigger an SOS from the app. The alert propagates to every group member's device over Bluetooth, even when there's no cell signal. Each device relays it further, so the alert reaches members who are out of direct Bluetooth range.

**Expense splitting.** Log expenses as they happen — accommodation, food, transport, gear. The app tracks who paid what, calculates what everyone owes at the end, and works entirely offline. No internet required to split a dinner bill in the mountains.

**Shared itinerary.** Build the trip plan before you leave — destinations, schedules, meeting points, important notes. The itinerary syncs to everyone's device when you're connected, then stays available offline throughout the trip.

**Offline photo sharing.** Share photos with the group over a local peer-to-peer connection. No upload, no compression, no waiting for signal. The person next to you gets the original file.

**Group coordination.** See which group members are nearby (via Bluetooth proximity), leave notes for the group, and coordinate meetups when you're split up — all without a data connection.

## Key decisions

**Bluetooth mesh over Wi-Fi only.** Wi-Fi direct is fast but has a shorter range and requires both devices to be in the same mode. Bluetooth has a longer effective range for the relay pattern we use for SOS, and it works in the background without both users actively opening the app. We use both — Wi-Fi for bulk transfers like photos, Bluetooth for alerts and coordination.

**Offline-first, sync second.** Everything in Campfyr is designed to work without internet as the baseline. Connectivity is a bonus, not a requirement. This inverts how most apps are built and it means the critical stuff — safety alerts, expense tracking, the itinerary — never fails because there's no signal.

**No accounts for core features.** Creating a trip and inviting your group works without anyone having an account. A short trip code is enough to join. Accounts are optional and only needed if you want to persist trip history across devices after the trip ends.

## Status

Campfyr is in active development. Core features — SOS, expense splitting, offline photo sharing — are built and being tested. Itinerary planning and the full group coordination features are in progress.
