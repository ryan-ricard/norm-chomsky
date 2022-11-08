file = open('norm-quotes.txt')
alltext = file.read()
blocks = alltext.split('\n\n\n')
for block in blocks:
	print('"'+block.replace('"', '\\"').replace('\n','\\n')+'",')