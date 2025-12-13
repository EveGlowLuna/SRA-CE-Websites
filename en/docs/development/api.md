---
title: API Reference
---

This document introduces the API interfaces of StarRailAssistant (SRA), covering the functionality and usage of modules such as mouse events, keyboard events, image recognition, and window management.

::: warning Version Differences
This document is sourced from the original SRA tutorial and applies to newer versions of SRA. The API documentation for older versions is outdated.
:::

## operator Module
The operator module provides functionality for interacting with game windows, including screenshots, image recognition, mouse clicks, keyboard presses, and other operations.

# Classes:

## Operator
```python :no-line-numbers
class SRACore.util.operator.Operator
```
Operator is the core class for operating game windows, encapsulating various methods for interacting with game windows.
To create an `Operator`, you can call its constructor. It accepts no parameters.
```python :no-line-numbers
operator = Operator()
```

### Properties
- `window_title` (str): Game window title. Default value is `"崩坏：星穹铁道"`.
- `gcm` (GlobalConfigManager): Global configuration manager instance.
- `confidence` (float): Image recognition confidence. Retrieved from `gcm`, range 0.0~1.0. Default value is 0.9.
- `zoom` (float): Screen scaling ratio. Retrieved from `gcm`. Default value is 1.25.
- `active_window` (bool): Whether to activate the window when getting window region. Default value is True.

An `Operator` instance can call the following methods:

### Operator.is_window_active
```python :no-line-numbers
@property
Operator.is_window_active() -> bool
```
Check if the game window is the currently active window.

`Return Value`:
- `True`: Window is the currently active window.
- `False`: Window is not the currently active window.

### Operator.get_win_region
```python :no-line-numbers
Operator.get_win_region(active_window: bool|None = None, raise_exception: bool = True) -> Region | None
```
Get the game window region.

`Parameters`:
- `active_window`: Whether to activate the window when getting it.
    - `True`: Activate window before getting.
    - `False`: Don't activate window before getting.
    - `None`: Use current instance default value. (Default value is `True`)
- `raise_exception`: Whether to raise an exception when getting fails.
    - `True`: Raise exception when getting fails.
    - `False`: Return `None` when getting fails.
  
`Return Value`:
- `Region`: Success, returns window region.
- `None`: Failure, returns `None`.

`Exceptions`:
- `Exception`: Game window not found | Window not activated | Getting failed

### Operator.screenshot
```python :no-line-numbers
@overload
Operator.screenshot(region: Region | None = None) -> PIL.Image.Image
```
Take a screenshot of the game window region.

`Parameters`:
- `region`: Screenshot region.
    - `Region`: Screenshot specified region.
    - `None`: Screenshot entire window region.

`Return Value`:
- `PIL.Image.Image`: Screenshot success, returns screenshot image.

```python :no-line-numbers
@overload
Operator.screenshot(from_x: float, from_y: float, to_x: float, to_y: float) -> PIL.Image.Image
```
Take a screenshot of the game window region.

`Parameters`:
- `from_x`: Relative X coordinate of the top-left corner of the screenshot region, range 0.0~1.0.
- `from_y`: Relative Y coordinate of the top-left corner of the screenshot region, range 0.0~1.0.
- `to_x`: Relative X coordinate of the bottom-right corner of the screenshot region, range 0.0~1.0.
- `to_y`: Relative Y coordinate of the bottom-right corner of the screenshot region, range 0.0~1.0.

`Return Value`:
- `PIL.Image.Image`: Screenshot success, returns screenshot image.

`Exceptions`:
- `ValueError`: Parameter error

### Operator.locate
```python :no-line-numbers
@overload
Operator.locate(template: str | Path, region: Region | None = None, trace: bool = True) -> Box | None
```
Find specified template image within the game window region.

`Parameters`:
- `template`: Template image path.
- `region`: Search region.
    - `Region`: Search within specified region.
    - `None`: Search within entire window region.
- `trace`: Whether to show search process.
    - `True`: Show search process.
    - `False`: Don't show search process.

`Return Value`:
- `Box`: Search success, returns template image position within window region.
- `None`: Search failure, returns `None`.

```python :no-line-numbers
@overload
Operator.locate(template: str | Path, 
                from_x: float, 
                from_y: float, 
                to_x: float, 
                to_y: float, 
                trace: bool = True) -> Box | None
```
Find specified template image within the game window region.

`Parameters`:
- `template`: Template image path.
- `from_x`: Relative X coordinate of the top-left corner of the search region, range 0.0~1.0.
- `from_y`: Relative Y coordinate of the top-left corner of the search region, range 0.0~1.0.
- `to_x`: Relative X coordinate of the bottom-right corner of the search region, range 0.0~1.0.
- `to_y`: Relative Y coordinate of the bottom-right corner of the search region, range 0.0~1.0.
- `trace`: Whether to show search process.
    - `True`: Show search process.
    - `False`: Don't show search process.

`Return Value`:
- `Box`: Search success, returns template image position within window region.
- `None`: Search failure, returns `None`.

### Operator.locate_any
```python :no-line-numbers
@overload
Operator.locate_any(templates: list[str | Path],
                    region: Region | None = None,
                    trace: bool = True) -> tuple[int, Box | None]
```
Find any one of the specified template image list within the game window region.

`Parameters`:
- `templates`: Template image path list.
- `region`: Search region.
    - `Region`: Search within specified region.
    - `None`: Search within entire window region.
- `trace`: Whether to show search process.

`Return Value`:
- `tuple[int, Box | None]`: Search success, returns the index of the found template image in the list and its position within the window region; search failure, returns -1 and `None`.

```python :no-line-numbers
@overload
Operator.locate_any(templates: list[str | Path],
                    from_x: float,
                    from_y: float,
                    to_x: float,
                    to_y: float,
                    trace: bool = True) -> tuple[int, Box | None]
```
Find any one of the specified template image list within the game window region.

`Parameters`:
- `templates`: Template image path list.
- `from_x`: Relative X coordinate of the top-left corner of the search region, range 0.0~1.0.
- `from_y`: Relative Y coordinate of the top-left corner of the search region, range 0.0~1.0.
- `to_x`: Relative X coordinate of the bottom-right corner of the search region, range 0.0~1.0.
- `to_y`: Relative Y coordinate of the bottom-right corner of the search region, range 0.0~1.0.
- `trace`: Whether to show search process.

`Return Value`:
- `tuple[int, Box | None]`: Search success, returns the index of the found template image in the list and its position within the window region; search failure, returns -1 and `None`.

### Operator.ocr
```python :no-line-numbers
@overload
Operator.ocr(region: Region | None = None, trace: bool = True) -> list[Any] | None
```
Perform OCR text recognition in the specified region of the window, returning raw OCR results (including text, coordinates, confidence, etc.).
`Parameters`:
- `region`: OCR recognition region.
    - `Region`: Recognize within specified region.
    - `None`: Recognize within entire window region.
- `trace`: Whether to show error information.

`Return Value`:
- `list[Any]`: Recognition success, returns OCR result list.
- `None`: Recognition failure, returns `None`.

```python :no-line-numbers
@overload
Operator.ocr(from_x: float, from_y: float, to_x: float, to_y: float, trace: bool = True) -> list[Any] | None
```
Perform OCR text recognition in the specified region of the window, returning raw OCR results (including text, coordinates, confidence, etc.).
`Parameters`:
- `from_x`: Relative X coordinate of the top-left corner of the recognition region, range 0.0~1.0.
- `from_y`: Relative Y coordinate of the top-left corner of the recognition region, range 0.0~1.0.
- `to_x`: Relative X coordinate of the bottom-right corner of the recognition region, range 0.0~1.0.
- `to_y`: Relative Y coordinate of the bottom-right corner of the recognition region, range 0.0~1.0.
- `trace`: Whether to show error information.

`Return Value`:
- `list[Any]`: Recognition success, returns OCR result list.
- `None`: Recognition failure, returns `None`.

`Example`:
```python :no-line-numbers
# Recognize within entire window region
ocr_result = operator.ocr()
# Recognize within specified region
region = Region(left=100, top=100, width=400, height=300)
ocr_result = operator.ocr(region=region)
# Recognize within specified relative coordinate region
ocr_result = operator.ocr(from_x=0.1, from_y=0.1, to_x=0.5, to_y=0.5)
```

### Operator.ocr_match
```python :no-line-numbers
Operator.ocr_match(text: str,
                   confidence: float = 0.9,
                   *args, **kwargs) -> Box | None
```
Perform OCR text recognition in the specified region of the window and find specified text.

`Parameters`:
- `text`: Text to find.
- `confidence`: Text matching confidence, range 0.0~1.0. Default value is 0.9.
- `*args`: Other parameters passed to `Operator.ocr`.
- `**kwargs`: Other parameters passed to `Operator.ocr`.

`Return Value`:
- `Box`: Search success, returns text position within window region.
- `None`: Search failure, returns `None`

### Operator.wait_ocr
```python :no-line-numbers
Operator.wait_ocr(text: str,
                   timeout: float = 10,
                   interval: float = 0.2,
                   confidence: float = 0.9,
                   *args, **kwargs) -> Box | None
```
Wait for specified text to appear in the specified region of the window.
`Parameters`:
- `text`: Text to find.
- `timeout`: Wait timeout in seconds. Default value is 10 seconds.
- `interval`: Interval between each recognition in seconds. Default value is 0.2 seconds.
- `confidence`: Text matching confidence, range 0.0~1.0. Default value is 0.9.
- `*args`: Other parameters passed to `Operator.ocr`.
- `**kwargs`: Other parameters passed to `Operator.ocr`.
                     
### Operator.click_point
```python :no-line-numbers
Operator.click_point(x: int | float, y: int | float, 
                     x_offset: int = 0, y_offset: int = 0,
                     after_sleep: float = 0) -> bool
```
Click at specified position within the game window region.

`Parameters`:
- `x`: X coordinate of click position.
    - `int`: Absolute coordinate in pixels.
    - `float`: Relative coordinate, range 0.0~1.0.
- `y`: Y coordinate of click position.
    - `int`: Absolute coordinate in pixels.
    - `float`: Relative coordinate, range 0.0~1.0.
- `x_offset`: X offset of click position in pixels. Default value is 0.
- `y_offset`: Y offset of click position in pixels. Default value is 0.
- `after_sleep`: Wait time after click in seconds. Default value is 0.

`Return Value`:
- `bool`: Click success, returns `True`; click failure, returns `False`

`Exceptions`:
- `ValueError`: Parameter error

### Operator.click_box
```python :no-line-numbers
Operator.click_box(box: Box,
                  x_offset: int = 0, y_offset: int = 0,
                  after_sleep: float = 0) -> bool
```
Click at specified position within the game window region.

`Parameters`:
- `box`: Region of click position.
- `x_offset`: X offset of click position in pixels. Default value is 0.
- `y_offset`: Y offset of click position in pixels. Default value is 0.
- `after_sleep`: Wait time after click in seconds. Default value is 0.

`Return Value`:
- `bool`: Click success, returns `True`; click failure, returns `False`

### Operator.click_img
```python :no-line-numbers
Operator.click_img(img_path: str | Path,
                   x_offset: int = 0, y_offset: int = 0,
                   after_sleep: float = 0) -> bool
```
Find specified template image within the game window region and click its center position.

`Parameters`:
- `img_path`: Template image path.
- `x_offset`: X offset of click position in pixels. Default value is 0.
- `y_offset`: Y offset of click position in pixels. Default value is 0.
- `after_sleep`: Wait time after click in seconds. Default value is 0.

`Return Value`:
- `bool`: Click success, returns `True`; click failure, returns `False`

### Operator.wait_img
```python :no-line-numbers
Operator.wait_img(img_path: str | Path,
                  timeout: float = 10,
                  interval: float = 0.5) -> Box | None
```
Wait for specified template image to appear within the game window region.

`Parameters`:
- `img_path`: Template image path.
- `timeout`: Wait timeout in seconds. Default value is 10 seconds.
- `interval`: Interval between each search in seconds. Default value is 0.5 seconds.

`Return Value`:
- `Box`: Image appears, returns template image position within window region; timeout without appearance, returns `None`

### Operator.wait_any_img
```python :no-line-numbers
Operator.wait_any_img(img_paths: list[str | Path],
                      timeout: float = 10,
                      interval: float = 0.5) -> int
```
Wait for any one of the specified template image list to appear within the game window region.

`Parameters`:
- `img_paths`: Template image path list.
- `timeout`: Wait timeout in seconds. Default value is 10 seconds.
- `interval`: Interval between each search in seconds. Default value is 0.5 seconds.

`Return Value`:
- `int`: Image appears, returns the index of the found template image in the list; timeout without appearance, returns -1

### Operator.press_key
```python :no-line-numbers
@staticmethod
Operator.press_key(key: str, 
                   presses: int = 1,
                   interval: float = 0,
                   wait: float = 0) -> bool
```
Simulate pressing specified key.

`Parameters`:
- `key`: Name of key to press
- `presses`: Number of presses. Default value is 1.
- `interval`: Interval between each press in seconds. Default value is 0 seconds.
- `wait`: Wait time before first press in seconds. Default value is 0 seconds.

`Return Value`:
- `bool`: Key press success, returns `True`; key press failure, returns `False`

### Operator.hold_key
```python :no-line-numbers
@staticmethod
Operator.hold_key(key: str, duration: float = 0) -> bool
```
Simulate holding specified key for a period of time.

`Parameters`:
- `key`: Name of key to hold
- `duration`: Hold duration in seconds. Default value is 0 seconds.

`Return Value`:
- `bool`: Key press success, returns `True`; key press failure, returns `False`

### Operator.sleep
```python :no-line-numbers
@staticmethod
Operator.sleep(seconds: float) -> None
```
Pause program execution for a period of time.

`Parameters`:
- `seconds`: Pause duration in seconds.

`Return Value`:
- `None`

### Operator.copy
```python :no-line-numbers
@staticmethod
Operator.copy(text: str) -> Any
```
Copy specified text to system clipboard.

`Parameters`:
- `text`: Text to copy.

### Operator.paste
```python :no-line-numbers
@staticmethod
Operator.paste() -> None
```
Simulate paste operation, pasting text from system clipboard to current cursor position.

`Parameters`:
- None

`Return Value`:
- `None`

### Operator.move_rel
```python :no-line-numbers
@staticmethod
Operator.move_rel(x_offset: int, y_offset: int) -> bool
```
Simulate relative mouse movement.

`Parameters`:
- `x_offset`: Mouse movement offset on X-axis in pixels.
- `y_offset`: Mouse movement offset on Y-axis in pixels.

`Return Value`:
- `bool`: Movement success, returns `True`; movement failure, returns `False`

### Operator.move_to
```python :no-line-numbers
@staticmethod
Operator.move_to(x: int | float, y: int | float, duration: float = 0.0) -> bool
```
Simulate mouse movement to specified position.

`Parameters`:
- `x`: X coordinate of target position.
    - `int`: Absolute coordinate in pixels.
    - `float`: Relative coordinate, range 0.0~1.0.
- `y`: Y coordinate of target position.
    - `int`: Absolute coordinate in pixels.
    - `float`: Relative coordinate, range 0.0~1.0.
- `duration`: Movement duration in seconds. Default value is 0 seconds.

`Return Value`:
- `bool`: Movement success, returns `True`; movement failure, returns `False`

### Operator.scroll
```python :no-line-numbers
@staticmethod
Operator.scroll(distance: int) -> bool
```
Simulate mouse wheel scrolling.

`Parameters`:
- `distance`: Scroll distance. Positive values scroll up, negative values scroll down.

`Return Value`:
- `bool`: Scroll success, returns `True`; scroll failure, returns `False`

## Executable
```python :no-line-numbers
class SRACore.util.operator.Executable(Operator)
```
`Executable` only inherits from `Operator`, with no new properties and methods. Can directly create instance for use.
```python :no-line-numbers
executable = Executable()
```

## Box
```python :no-line-numbers
@dataclasses.dataclass
class SRACore.util.operator.Box
```
Represents a rectangular region, containing position and size information.
Properties
- `left` (int): X coordinate of the top-left corner of the rectangle.
- `top` (int): Y coordinate of the top-left corner of the rectangle.
- `width` (int): Width of the rectangle.
- `height` (int): Height of the rectangle.

Methods
### Box.center
```python :no-line-numbers
@property
Box.center() -> tuple[int, int]
```
Calculate and return the center point coordinates of the rectangle.

## Region
```python :no-line-numbers
@dataclasses.dataclass
class SRACore.util.operator.Region
```
Represents a rectangular region, containing position and size information.
Properties
- `left` (int): X coordinate of the top-left corner of the rectangle.
- `top` (int): Y coordinate of the top-left corner of the rectangle.
- `width` (int): Width of the rectangle.
- `height` (int): Height of the rectangle.

Methods
### Region.tuple
```python :no-line-numbers
@property
Region.tuple() -> tuple[int, int, int, int]
```
Convert region information to tuple form, returning (left, top, width, height).

## system Module
The system module provides functionality for interacting with the system, including executing commands, checking processes, terminating processes, and other operations.
# Methods: 
### Popen
```python :no-line-numbers
SRACore.util.system.Popen(arg: str | list[str], 
                           shell: bool = False, 
                           **kwargs) -> bool
```
Execute specified command using subprocess. It's a wrapper for `psutil.Popen`.

However, `psutil.Popen` is a wrapper for `subprocess.Popen`.
`Parameters`:
- `arg`: Command string or string list to execute.
- `shell`: Whether to execute command through shell. Default value is `False`.
- `**kwargs`: Other parameters passed to `subprocess.Popen`.

`Return Value`:
- `bool`: Command execution success, returns `True`; command execution failure, returns `False`

### is_process_running
```python :no-line-numbers
SRACore.util.system.is_process_running(process_name: str) -> bool
```
Check if a process with the specified name is running.
`Parameters`:
- `process_name`: Name of process to check.

`Return Value`:
- `bool`: Process is running, returns `True`; process is not running, returns `False`

### task_kill
```python :no-line-numbers
SRACore.util.system.task_kill(process_name: str) -> bool
```
Terminate process with specified name.
`Parameters`:
- `process_name`: Name of process to terminate.

`Return Value`:
- `bool`: Process termination success, returns `True`; process termination failure, returns `False`

## config Module
The config module provides configuration file management functionality, including loading, getting, setting, and saving configuration items and other operations.

Methods:
### load_config
```python :no-line-numbers
SRACore.util.config.load_config(name: str ) -> dict[str, Any]
```
Load configuration file with specified name.
`Parameters`:
- `name`: Configuration name.
`Return Value`:
- `dict[str, Any]`: Load success, returns configuration dictionary.
- `{}`: Load failure, returns empty dictionary.

### load_settings
```python :no-line-numbers
SRACore.util.config.load_settings() -> dict[str, Any]
```
Load global settings configuration file.
`Return Value`:
- `dict[str, Any]`: Load success, returns configuration dictionary.
- `{}`: Load failure, returns empty dictionary.

### load_cache
```python :no-line-numbers
SRACore.util.config.load_cache() -> dict[str, Any]
```
Load cache configuration file.
`Return Value`:
- `dict[str, Any]`: Load success, returns configuration dictionary.
- `{}`: Load failure, returns empty dictionary.

## encryption Module
The encryption module provides data encryption and decryption functionality, using Windows DPAPI for encryption and decryption operations.
Methods:
### win_decryptor
```python :no-line-numbers
SRACore.util.encryption.win_decryptor(encrypted_note: str, entropy: bytes = None) -> str
```
Decrypt data using Windows DPAPI
`Parameters`:
- `encrypted_note`: Base64 encoded string to decrypt.
- `entropy`: Optional additional entropy, default is `None`.

`Return Value`:
- `str`: Decrypted string.

## logger Module
The logger module provides logging functionality
### logger
```python :no-line-numbers
from SRACore.util.logger import logger
```
`logger` is a pre-configured logger instance, using Python's `loguru` library for logging.