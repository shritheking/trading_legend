# TELEGRAM BOT INTEGRATION ARCHITECTURE

## Overview
Trading Legend is engineered with a clean, decoupled REST API layer that allows any external Telegram bot (written in Python with `python-telegram-bot`, `aiogram`, or `telebot`) to interface directly without modifying frontend code.

## 1. Webhook & Query Endpoints

### Check Application Status
- **Method**: `POST`
- **URL**: `/api/telegram/webhook`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "action": "check_status",
    "referenceId": "TL-2026-4812",
    "telegramUsername": "optional_username"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "referenceId": "TL-2026-4812",
      "channelName": "Vance Macro FX & Commodities",
      "status": "Scheduled",
      "publicStatusNote": "Promotion campaign scheduled for broadcast.",
      "scheduledDate": "2026-11-05T18:00:00.000Z",
      "paymentStatus": "Paid"
    }
  }
  ```

---

### Get Weekly Slot Availability
- **Method**: `POST`
- **URL**: `/api/telegram/webhook`
- **Request Body**:
  ```json
  {
    "action": "get_slots"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "slots": [
      {
        "id": "pkg-basic",
        "name": "Basic Promotion",
        "availableSlots": 4,
        "totalSlots": 10,
        "price": "Contact for Pricing"
      },
      {
        "id": "pkg-featured",
        "name": "Featured Promotion",
        "availableSlots": 2,
        "totalSlots": 6,
        "price": "$499"
      }
    ]
  }
  ```

---

### Inbound Bot Webhook Mode (Direct Telegram Updates)
If configuring Telegram webhook directly to Trading Legend:
- Set Telegram Webhook:
  `https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://your-domain.com/api/telegram/webhook`
- Handles standard Telegram update JSON payloads and responds with Telegram send message actions for `/start`, `/status <REF_ID>`, `/slots`, and `/apply`.

---

### Real-Time Event Polling for Push Notifications
- **Method**: `GET`
- **URL**: `/api/telegram/webhook?poll=true`
- Returns an array of events:
  - `application.submitted`
  - `application.approved`
  - `application.rejected`
  - `status.updated`
- The external Python daemon can poll this endpoint periodically to broadcast automatic messages to applicants or admin review channels.
