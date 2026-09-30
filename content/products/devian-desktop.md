---
title: "Devian Desktop"
description: "A control center for the AI coding agents on your machine. See what Claude Code, Codex, Cursor, OpenCode and Antigravity did: sessions, commands, leftover servers, memory and token usage. Free, open source, 100% local."
date: "2026-09-30"
author: "Devian Labs"
---

## The problem

AI coding agents now do a lot of work on developers' machines, and most of it happens out of sight. An agent runs commands, edits files, starts dev servers and Docker containers, writes to its own memory, and burns through tokens. When the session ends, you're left to piece together what actually happened.

Each agent keeps its own history in its own format. Claude Code, Codex, OpenCode, Cursor and Antigravity all store sessions, memory and usage differently, in different folders. There's no single place to see what they did, what they left running, or how close you are to your plan limits.

## What we built

Devian started as a tool for cleaning up a cluttered dev machine. With version 2.0 it became a control center for the AI coding agents on your machine. It reads the agents' own local history and never sends it anywhere.

The core features:
- **Sessions**: one timeline across all your agents. Prompts, every command run and every file edited. Risky actions like force pushes, `sudo`, `rm -rf` outside the project, `curl | sh`, `.env` edits and global installs are flagged
- **Runtime**: processes, ports and Docker containers traced back to the agent session that started them. Anything still running after the session ended shows up as a leftover you can stop in one click
- **Memory**: everything agents load into context, from Claude Code auto-memory and `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` to Cursor rules and Codex memories. Read it, edit it in the built-in editor, or forget what's wrong
- **Usage and plan limits**: tokens per day, agent, project and model, plus Claude and Codex 5-hour and weekly limits with their reset times
- **Cleanup**: old transcripts, rewind checkpoints, undo snapshots and editor caches, alongside `node_modules`, build artifacts and Docker leftovers
- **MCP server**: read-only tools that let agents check which dev servers are running, get a free port and see what other agents did in a project, instead of guessing

## Key decisions

**Local only.** Agent history contains prompts, code and secrets. Devian reads it where it already lives and never uploads it. There are no accounts.

**Read-only by default.** Devian observes the agents rather than controlling them. Cleanup and Forget move files to the Trash instead of deleting them, and the MCP server only exposes read-only tools.

**One view across agents.** Developers rarely use just one agent. Devian supports Claude Code, Codex, OpenCode, Cursor and Antigravity side by side, including multiple Claude Code accounts.

**Native and cross-platform.** Built with Tauri (a Rust backend with a React frontend), so it starts fast and runs on macOS, Windows and Linux.

**Free and open source.** Every feature is free, with no license keys or feature limits.

## Status

Devian 2.0 is available for macOS (via Homebrew or direct download), Windows and Linux. Visit [devian.app](https://devian.app) to download it.
