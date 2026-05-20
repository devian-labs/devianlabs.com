---
title: "Devian Desktop"
description: "The control center for your dev machine. Find abandoned projects, clean up clutter, stay organised."
date: "2026-04-01"
author: "Devian Labs"
---

## The problem

Every developer who's been working for a few years has the same problem: a filesystem full of clutter. Projects started and abandoned. Dependencies installed and forgotten. Repos that haven't been touched in two years still sitting in `~/code`, quietly consuming disk space.

The standard fix is a manual audit — open Finder or a terminal, scroll through directories, try to remember what each project was, decide whether it's safe to delete. It's tedious, it doesn't scale, and most people never do it systematically.

We hit this problem ourselves. We built Devian Desktop to solve it.

## What we built

Devian Desktop is a native macOS application that acts as a control centre for your development machine. It scans your filesystem, indexes every repository it finds, and surfaces the information you need to make decisions.

The core workflow:
- Scan a directory and find every repository, regardless of language or framework
- See at a glance which ones are active, which are stale, and which haven't been touched in months
- Filter by tech stack, last modified date, or repository size
- Clean up safely — remove `node_modules`, build artifacts, or the whole repo — with one action

The dashboard gives you a complete picture of your local development environment without having to open a terminal.

## Key decisions

**Native over Electron.** Electron apps are convenient to build but heavy to run. Devian Desktop is built natively, which means it starts fast, uses minimal memory, and doesn't feel like a website pretending to be an app.

**Read before you delete.** We spent a lot of time on the cleanup flow. The app shows you exactly what will be removed and how much space you'll recover before you confirm anything. Mistakes here are expensive.

**No cloud, no telemetry.** Everything stays on your machine. No account required, no usage data sent anywhere. Your file system is your business.

## Status

Devian Desktop is in active development. Visit [devian.app](https://devian.app) to follow progress and join the early access list.
