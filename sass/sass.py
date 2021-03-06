import re
import glob

def parce(line, width):
	containsPx = line.find('px')
	if containsPx != -1:
		patternString = "\s\d*?px"
		matchString = re.findall(patternString, line)
		for j in matchString:
			matchString2 = re.search(patternString, line)
			# newStr = re.sub(patternString, repl, line, count=0)
			# print(matchString2)
			# print(matchString2.group(0))
			# print(float(matchString2.group(0)[1:-2]))
			# print(float(matchString2.group(0)[1:-2])/width)
			# print(str(((float(matchString2.group(0)[1:-2]))/width)*100))
			line = line.replace(matchString2.group(0), ' ' + str(((float(matchString2.group(0)[1:-2]))/width)*100) + 'vw', 1)
	return line
def parsScss(lines):
	# 0 - mob
	# 1 - tablet
	# 2 - netbuk
	# 3 - pc
	typeOfDevice = 0
	output = ''
	for i in lines:
		containsMedia = i.find('media')
		if containsMedia != -1:
			typeOfMedia = re.search("\s\d*?px", i).group(0)[1:-2]
			if (int(typeOfMedia) == 575):
				typeOfDevice = 1

			continue
		output += i + '\n'
		if (typeOfDevice == 1):
			output += parce(i, 320)  + '\n'
	return output
for filename in glob.glob('*.sass'):
	file = open(filename, "r")
	filein = file.read()
	lines = filein.split('\n')
	file = open(filename, "w")
	file.write(parsScss(lines))

