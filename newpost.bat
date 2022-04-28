@ECHO OFF
SETLOCAL

SET /p Input=Enter t or a:
SET /p Title=input title:

@REM 템플릿도 넣고 싶음...

if /I "%Input%"=="t" (
  @REM echo >"%DATE%"-"%Title%".md
  echo %DATE%-%Title%>./blog/translate-list/"%DATE%"-"%Title%".md
) else if /I "%Input%"=="a" (
  powershell.exe ni ./blog/article-list/"%DATE%"-"%Title%".md
) else (
  echo incorrect input
  EXIT /b
)



echo Done~

ENDLOCAL
EXIT /b
