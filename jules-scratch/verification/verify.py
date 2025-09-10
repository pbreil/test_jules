from playwright.sync_api import Page

def test_planet_viewer(page: Page):
    print("Navigating to page...")
    page.goto("http://localhost:8000")
    print("Page loaded.")

    try:
        print("Taking screenshot...")
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Screenshot taken successfully.")
    except Exception as e:
        print(f"Error taking screenshot: {e}")
