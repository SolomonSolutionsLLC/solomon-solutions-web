// @vitest-environment jsdom
// @vitest-environment-options {"url":"https://www.solomonsolutions.tech/"}
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { PublicAnalytics } from "@/components/analytics/PublicAnalytics";
import { publicAnalyticsConfig } from "@/lib/public-analytics-config";
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
const config = { ...publicAnalyticsConfig, enabled: true, measurementId: "G-TEST123456" };
beforeEach(() => {
  window.localStorage.clear();
  document.head.querySelectorAll("#public-site-google-analytics").forEach(node => node.remove());
  delete (window as Window & {dataLayer?: unknown[]}).dataLayer;
});
afterEach(() => cleanup());
it("starts collapsed without loading analytics and saves rejection", () => {
  render(<PublicAnalytics config={config} />);
  const toggle = screen.getByRole("button", {name:"Cookies"});
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(screen.queryByRole("region")).toBeNull();
  expect(document.querySelector("#public-site-google-analytics")).toBeNull();
  fireEvent.click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  expect(document.getElementById(toggle.getAttribute("aria-controls")!)).toBe(screen.getByRole("region"));
  fireEvent.click(screen.getByRole("button", {name:"Reject cookies"}));
  expect(window.localStorage.getItem(config.storageKey)).toContain('"rejected"');
  expect(document.activeElement).toBe(toggle);
  expect(document.querySelector("#public-site-google-analytics")).toBeNull();
});
it("closes on Escape or another toggle click and restores keyboard focus", () => {
  render(<PublicAnalytics config={config} />);
  const toggle = screen.getByRole("button", {name:"Cookies"});
  fireEvent.click(toggle);
  fireEvent.keyDown(screen.getByRole("region"), {key:"Escape"});
  expect(screen.queryByRole("region")).toBeNull();
  expect(document.activeElement).toBe(toggle);
  fireEvent.click(toggle); fireEvent.click(toggle);
  expect(screen.queryByRole("region")).toBeNull();
});
it("loads analytics only after acceptance and lets visitors reopen to withdraw", () => {
  render(<PublicAnalytics config={config} />);
  const toggle = screen.getByRole("button", {name:"Cookies"});
  fireEvent.click(toggle);
  fireEvent.click(screen.getByRole("button", {name:"Accept cookies"}));
  expect(document.querySelector("#public-site-google-analytics")).toBeTruthy();
  fireEvent.click(toggle);
  fireEvent.click(screen.getByRole("button", {name:"Reject cookies"}));
  expect((window as unknown as Record<string, boolean>)["ga-disable-G-TEST123456"]).toBe(true);
});
